import { ArrowRight, Clock3, Map } from 'lucide-react'
import React from 'react'
import { BaseButton } from '../buttons/baseButton'

interface CardEventProps {
  imageUrl: string
  title: string
  date: string
  time: string
  location: string
}

export function CardEvent({
  imageUrl,
  title,
  date,
  time,
  location
}: CardEventProps) {
  return (
    <div className="bg-white w-full flex items-start justify-center flex-col gap-4 rounded-lg shadow-3xl ">
      <a href="#" className="relative w-full h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
          src={imageUrl}
          alt=""
        />
      </a>

      <div className="w-full max-w-xl pb-8 px-8 flex items-start justify-center flex-col gap-6">
        <span className="text-base font-semibold text-gray-500 ">
          Proximo evento
        </span>
        <h1 className="text-2xl font-bold">{title}</h1>

        {/* Infos */}
        <div className="flex items-start justify-between flex-col gap-4  sm:flex-row">
          {/* Data */}
          <div className="flex items-start justify-between flex-col gap-[0.1rem] min-w-[6rem] sm: ">
            <span className="text-4xl font-bold text-primary-200">20</span>
            <span className="text-sm font-semibold">{date}</span>
          </div>

          <div className="flex items-start justify-between flex-col gap-2">
            <p className="text-sm text-gray-500 font-normal flex items-center justify-between flex-row gap-2">
              <span>
                <Clock3 size={16} className="text-primary-200" />
              </span>
              {time}
            </p>
            <p className="text-sm text-gray-500 font-normal flex items-center justify-center flex-row gap-2">
              <span>
                <Map size={16} className="text-primary-200" />
              </span>
              {location}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="w-full max-w-[14rem] ">
          <BaseButton
            iconRight={ArrowRight}
            title="MAIS INFORMAÇÕES"
            styleBtn="CircleHover"
          />
        </div>
      </div>
    </div>
  )
}
