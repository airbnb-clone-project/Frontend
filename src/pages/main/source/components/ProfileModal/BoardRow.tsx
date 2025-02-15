import { useState } from 'react';

import Button from '@/components/common/Button/Button';

const BoardRow = ({
  hight,
  padding,
  rounded = false,
  save = true,
  children,
}: {
  hight: string;
  padding: string;
  rounded?: boolean;
  save?: boolean;
  children: React.ReactNode;
}) => {
  const [hoverSection, setHoverSection] = useState(false);
  return (
    <div
      className={`w-full h-[${hight}] flex items-center mb-1
            ${padding}
            ${hoverSection ? 'bg-gray-200' : ''}
            ${rounded ? 'rounded-xl' : ''}`}
      onMouseEnter={() => setHoverSection(true)}
      onMouseLeave={() => setHoverSection(false)}
    >
      <div
        className={`w-12 h-12 mr-2 rounded-xl ${
          hoverSection ? 'bg-white' : 'bg-gray-200'
        }`}
      ></div>
      <div className="font-black flex items-center justify-between w-[255px]">
        {children}
        {save && hoverSection && (
          <Button>
            <div className="text-center text-white">저장</div>
          </Button>
        )}
      </div>
    </div>
  );
};
export default BoardRow;
