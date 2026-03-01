import { FC, ReactNode } from 'react';

interface HoverProps {
  children?: ReactNode;
}

/**
 * Hover 컴포넌트
 *
 * 호버 효과를 제공하는 기본 컴포넌트입니다.
 * Tailwind CSS를 사용하여 hover 상태를 처리합니다.
 */
const Hover: FC<HoverProps> = ({ children }) => {
  return (
    <div className="transition-all duration-200 hover:opacity-80 hover:scale-105 cursor-pointer">
      {children}
    </div>
  );
};

export default Hover;
