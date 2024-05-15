'use client'

import React from 'react'

type TopScreenProps = {
  isOn: boolean,
  children?: React.ReactNode
}

const TopScreen: React.FC<TopScreenProps> = ({isOn,children}) => {
  return (
    <div id="screen" className={`${isOn ? "bg-[#C3FBFF]" : "bg-black"} h-[300px] w-[366px] relative border-solid border-8 border-[#6A2323]`}>
      {isOn && children}
    </div>
)
}

export default TopScreen