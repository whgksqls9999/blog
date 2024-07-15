import { ReactNode } from 'react';
import { ColorType } from '../types/colors';

interface MainButton {
  children: ReactNode;
  backgroundColor: ColorType;
  rowSpan: number;
}

export function MainButton({ children, backgroundColor, rowSpan }: MainButton) {
  return (
    <div className={`p-2 hover:p-0 transition-all row-span-${rowSpan}`}>
      <button className={`bg-${backgroundColor} h-full w-full`}>
        <div>{children}</div>
      </button>
    </div>
  );
}
