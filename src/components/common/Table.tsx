import React, { useState } from 'react';

// Define a generic type for the data
type DataType = Record<string, any>;

interface Column<T extends DataType> {
  key: keyof T; // Ensure the key is a valid key of the data type
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T, index:number) => React.ReactNode; // Allow custom rendering with access to the entire row
}

interface TableProps<T extends DataType> {
  data: T[];
  columns: Column<T>[];
  defaultSort?: { key: keyof T; direction: 'asc' | 'desc' | 'none' };
}

const Table = <T extends DataType>({ data, columns, defaultSort }: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState(defaultSort || { key: '', direction: 'none' });

  const sortedData = React.useMemo(() => {
    if (sortConfig.direction === 'none') return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' | 'none' = 'asc';

    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else if (sortConfig.direction === 'desc') {
        direction = 'none';
      }
    }

    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => column.sortable && requestSort(column.key)}
              >
                <div className="flex items-center">
                  {column.label}
                  {column.sortable && (
                    <span className="ml-2">
                      {sortConfig.key === column.key
                        ? sortConfig.direction === 'asc'
                          ? '▲'
                          : sortConfig.direction === 'desc'
                          ? '▼'
                          : ''
                        : ''}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key as string} className="px-6 py-4 border-b border-gray-200">
                  {column.render
                    ? column.render(row[column.key], row, rowIndex) // Pass the entire row to the render function
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;