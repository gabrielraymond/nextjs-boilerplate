import React, { useState } from 'react';
import styles from '@/styles/Table.module.css'; // Import the CSS Module

type DataType = Record<string, any>;

interface Column<T extends DataType> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
  sticky?: 'left' | 'right';
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
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                className={`${styles.th} ${
                  column.sticky ? `${styles.sticky} ${column.sticky === 'left' ? styles.stickyLeft : styles.stickyRight}` : ''
                }`}
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
                <td
                  key={column.key as string}
                  className={`${styles.td} ${
                    column.sticky ? `${styles.sticky} ${column.sticky === 'left' ? styles.stickyLeft : styles.stickyRight}` : ''
                  }`}
                >
                  {column.render
                    ? column.render(row[column.key], row, rowIndex)
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