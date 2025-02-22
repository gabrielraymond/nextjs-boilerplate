'use client'
import { ReactSVG } from 'react-svg';

interface MyIconProps {
  src: string;
  color?: string;
  width?: number | string;
  height?: number | string;
}

const MyIcon: React.FC<MyIconProps> = ({ src, color = 'currentColor', width = 24, height = 24 }) => {
  const handleBeforeInjection = (svg: SVGSVGElement) => {
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.setAttribute('fill', color);
  };

  return (
    <ReactSVG
      src={src}
      beforeInjection={handleBeforeInjection}
      loading={() => <span>Loading...</span>} // Tampilkan saat SVG sedang dimuat
      fallback={() => <span>Error loading SVG!</span>} // Tampilkan jika SVG gagal dimuat
    />
  );
};

export default MyIcon;