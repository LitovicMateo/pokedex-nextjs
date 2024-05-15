'use client'

import React from 'react'

type TopScreenProps = {
  isOn: boolean,
  children?: React.ReactNode
}

const TopScreen: React.FC<TopScreenProps> = ({isOn,children}) => {
  return (
    <div id="screen" className={`${isOn ? "bg-[#C3FBFF]" : "bg-black"} h-[300px] max-h-[30%] w-[366px] max-w-full relative border-solid overflow-hidden border-8 border-[#6A2323]`}>
      {isOn && children}
    </div>
)
}

export default TopScreen