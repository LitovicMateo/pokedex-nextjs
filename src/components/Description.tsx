import React from 'react'

type DescriptionProps = {
    description: string
}

const Description: React.FC<DescriptionProps> = ({description}) => {
  return (
    <div className='h-full w-full flex justify-center items-center px-6 text-lg text-center leading-8'>
        <p>{description}</p>
    </div>
  )
}

export default Description