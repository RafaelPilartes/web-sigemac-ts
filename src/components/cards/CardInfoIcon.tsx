import React, { ElementType } from 'react'

interface CardInfoIconProps {
  icon: ElementType
  title: string
  description: string
}

export function CardInfoIcon({
  icon: Icon,
  title,
  description
}: CardInfoIconProps) {
  return (
    <div className="flex flex-col gap-6 sm:max-w-xs py-10 px-7 group shadow-3xl">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-primary-200 transition-all duration-300 group-hover:bg-primary-500">
        <Icon size={20} />
      </div>

      <h1 className="text-xl font-bold">{title}</h1>

      <p>{description}</p>
    </div>
  )
}
