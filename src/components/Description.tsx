import React from 'react'

type DescriptionProps = {
    name: string;
    description: string
}

const Description: React.FC<DescriptionProps> = ({description, name}) => {
  return (
    <div className='h-full w-full flex flex-col gap-8 justify-center items-center px-6 text-lg text-center leading-8'>
      <h2 className='text-3xl'>{name.toUpperCase()}</h2>
        <p>{description}</p>
    </div>
  )
}

export default React.memo(Description)