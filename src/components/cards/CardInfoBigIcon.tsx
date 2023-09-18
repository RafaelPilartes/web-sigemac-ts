import React, { ElementType } from 'react'

interface CardInfoBigIconProps {
  typeIcon?: 'svg' | 'img'
  urlIcon?: string
  typeColor?: 'primary' | 'secondary' | 'none'
  link?: string
  icon?: ElementType
  title: string
  description: string
}

export function CardInfoBigIcon({
  typeIcon = 'svg',
  urlIcon,
  typeColor,
  link = '#',
  icon: Icon,
  title,
  description
}: CardInfoBigIconProps) {
  const bgColorIs = `${
    typeColor == 'primary'
      ? 'bg-primary-200'
      : typeColor == 'secondary'
      ? 'bg-secondary-200'
      : 'bg-white'
  }`
  const iconColorIs = `${
    typeColor == 'primary'
      ? 'text-white'
      : typeColor == 'secondary'
      ? 'text-primary-200'
      : ''
  }`
  const textColorIs = `${
    typeColor == 'primary'
      ? 'text-white'
      : typeColor == 'secondary'
      ? 'text-white'
      : ''
  }`
  return (
    <a
      href={link}
      className={`${bgColorIs} flex flex-col items-center gap-8 py-10 px-7 rounded-sm group shadow-4xl transition-all duration-300 hover:shadow-sm hover:-translate-y-3 `}
    >
      <div
        className={`w-36 h-36 flex items-center justify-center rounded-full ${iconColorIs} border transition-all duration-300 group-hover:`}
      >
        {typeIcon && Icon && <Icon size={80} />}
        {typeIcon && <img src={urlIcon} alt="" className="w-20 h-20" />}
      </div>

      <div className="flex flex-col items-center gap-3">
        <h1 className={`w-full text-2xl font-bold ${textColorIs} `}>{title}</h1>
        <p className={`w-full text-base ${textColorIs} `}>{description}</p>
      </div>
    </a>
  )
}
