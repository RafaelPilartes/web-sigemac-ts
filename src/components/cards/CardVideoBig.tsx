import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

interface CardVideoBigProps {
  date: string
  title: string
  description: string
  imageUrl: string
}

export function CardVideoBig({
  date,
  title,
  description,
  imageUrl
}: CardVideoBigProps) {
  return (
    <div className="w-full flex flex-row items-center justify-center shadow-4xl max-w-s-900:flex-col max-w-s-900:h-[60rem]">
      {/* image */}
      <div className="relative w-full h-[32rem] flex flex-1 flex-col items-center justify-center overflow-hidden">
        <img
          alt=""
          src={imageUrl}
          className="w-full h-full z-[1] object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
        />

        <button className="relative w-16 h-16 z-[2] flex items-center justify-center bg-primary-200">
          <div className="absolute z-0 w-16 h-16 bg-primary-200/70 flex justify-center items-center transition-all duration-300 animate-ping "></div>
          <BsFillPlayFill size={30} className="text-white" />
        </button>
      </div>

      {/* info */}
      <div className="flex min-w-s-900:flex-1 flex-col items-start justify-center gap-6 py-24 px-10 max-w-s-900:py-8">
        <div className="flex flex-col items-start justify-center">
          <h3 className="w-full text-base font-medium text-primary-200">
            {date}
          </h3>
          <h1 className="w-full text-3xl font-bold">{title}</h1>
        </div>
        <p className="w-full text-base leading-8">{description}</p>
      </div>
    </div>
  )
}
