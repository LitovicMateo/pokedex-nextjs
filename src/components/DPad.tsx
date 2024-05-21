import React from 'react';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type DPadProps = {
  handleSideButtons: (n: number) => void;
};

type DirectionButtonProps = {
  onClick?: () => void;
  rotation?: string;
  ariaLabel: string;
};

const DirectionButton: React.FC<DirectionButtonProps> = ({ onClick, rotation = "", ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`h-[50px] aspect-square bg-[#6A2323] flex justify-center rounded-r-3xl items-center ${rotation}`}
  >
    <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center text-[#b94747]">
      <ChevronRightIcon fontSize="large" />
    </div>
  </button>
);

const DPad: React.FC<DPadProps> = ({ handleSideButtons }) => {
  return (
    <div className="w-full scale-90 md:scale-100 flex justify-center items-center">
      <div className="grid grid-cols-3 w-fit grid-rows-3 justify-center items-center">
        <div></div>
        <DirectionButton ariaLabel="Up" rotation="-rotate-90" />
        <div></div>
        <DirectionButton onClick={() => handleSideButtons(-1)} ariaLabel="Left" rotation="rotate-180" />
        <div className="h-[50px] aspect-square bg-[#6A2323]"></div>
        <DirectionButton onClick={() => handleSideButtons(1)} ariaLabel="Right" />
        <div></div>
        <DirectionButton ariaLabel="Down" rotation="rotate-90" />
        <div></div>
      </div>
    </div>
  );
};

export default DPad;
