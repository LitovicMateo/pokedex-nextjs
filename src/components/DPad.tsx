import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type DPadProps = {
  handleSideButtons: (n: number) => void
}


const DPad: React.FC<DPadProps> = ({handleSideButtons}) => {
  return (
    <div className="w-full scale-90 md:scale-100 flex justify-center items-center">
    <div className="grid grid-cols-3 w-fit grid-rows-3 justify-center items-center">
      <div className="h-[50px] aspect-square"></div>
      <div className="h-[50px] aspect-square bg-[#6A2323] rounded-t-3xl flex justify-center items-center">
        <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center -rotate-90 text-[#b94747]">
          <ChevronRightIcon fontSize="large" />
        </div>
      </div>
      <div className="h-[50px] aspect-square "></div>
      <div className="h-[50px] aspect-square bg-[#6A2323] rounded-l-3xl flex justify-center items-center">
        <div
          onClick={handleSideButtons.bind(null, -1)}
          className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center rotate-180 text-[#b94747]"
        >
          <ChevronRightIcon fontSize="large" />
        </div>
      </div>
      <div className="h-[50px] aspect-square bg-[#6A2323]"></div>
      <div className="h-[50px] aspect-square bg-[#6A2323] rounded-r-3xl flex justify-center items-center">
        <div
          onClick={handleSideButtons.bind(null, 1)}
          className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center text-[#b94747]"
        >
          <ChevronRightIcon fontSize="large" />
        </div>
      </div>
      <div className="h-[50px] aspect-square "></div>
      <div className="h-[50px] aspect-square bg-[#6A2323] rounded-b-3xl flex justify-center items-center">
        <div className="w-[75%] aspect-square bg-[#4d1919] rounded-full flex justify-center items-center rotate-90 text-[#b94747]">
          <ChevronRightIcon fontSize="large" />
        </div>
      </div>
      <div className="h-[50px] aspect-square "></div>
    </div>
  </div>
)
}

export default DPad