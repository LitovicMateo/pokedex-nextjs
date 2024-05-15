import React from 'react'

type BottomScreenProps = {
  isOn: boolean,
  children?: React.ReactNode
}

const BottomScreen: React.FC<BottomScreenProps> = ({isOn}) => {
  return (
    <div id="screen" className={`${isOn ? "bg-[#C3FBFF]" : "bg-black"} h-[334px] w-[366px] border-solid border-8 border-[#6A2323]`}></div>
)
}

export default BottomScreen