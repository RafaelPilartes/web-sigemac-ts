import { BookPlus, Calendar } from 'lucide-react'
import { BsFillPlayFill } from 'react-icons/bs'

interface CardReadingPlanProps {
  imageUrl: string
  title: string
  date: string
  duration: number
}

export function CardReadingPlan({
  imageUrl,
  title,
  date,
  duration
}: CardReadingPlanProps) {
  return (
    <div className=" w-full flex items-start justify-center flex-col gap-4 rounded-lg shadow-3xl ">
      <a
        href="#"
        className="relative w-full h-60 overflow-hidden flex items-center justify-center"
      >
        <a
          href="#"
          className="relative w-12 h-12 z-[2] flex items-center justify-center bg-primary-200"
        >
          <div className="absolute z-0 w-12 h-12 bg-primary-200/70 flex justify-center items-center transition-all duration-300 animate-ping "></div>
          <BookPlus size={24} className="text-white" />
        </a>
        <img
          className="w-full h-full object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
          src={imageUrl}
          alt=""
        />
      </a>

      <div className="w-full max-w-sm pb-8 px-6 flex items-start justify-center flex-col gap-6">
        <div className="flex items-start justify-center flex-col gap-2">
          <a href="#" className="text-lg font-semibold">
            {title}
          </a>

          <p className="text-sm text-gray-300 font-normal flex items-center justify-between flex-row gap-2">
            <span>
              <Calendar size={16} className="text-primary-200" />
            </span>
            {date}
          </p>

          <p className="text-sm text-gray-300 font-normal flex items-center justify-between flex-row gap-2">
            Duração:
            <span className="text-primary-200 font-semibold">
              {duration} dia{duration > 1 && 's'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
