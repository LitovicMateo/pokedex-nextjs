"use client"

import React from 'react'
import { DeviceContextProvider } from '@/context/deviceContext'


const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <DeviceContextProvider>
      {children}
    </DeviceContextProvider>
  )
}

export default Providers