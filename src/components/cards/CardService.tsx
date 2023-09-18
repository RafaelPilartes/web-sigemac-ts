import { ArrowRight, Stethoscope } from 'lucide-react'
import { BaseButton } from '../buttons/baseButton'

interface ServiceInterface {
  id: string
  imageUrl: string
  title: string
  description: string
}

interface CardServiceProps {
  service: ServiceInterface
  showBtn?: boolean
}

export function CardService({ service, showBtn }: CardServiceProps) {
  return (
    <div className=" w-full flex items-start justify-center flex-col gap-4 rounded-lg shadow-3xl ">
      <a
        href={service.id}
        className="relative w-full h-60 overflow-hidden flex items-start justify-start"
      >
        <a className="relative w-12 h-12 z-[2] flex items-center justify-center bg-primary-200">
          <div className="absolute z-0 top-0 left-0 w-12 h-12 bg-primary-200/70 flex justify-center items-center transition-all duration-00 animate-ping "></div>
          <Stethoscope size={24} className="text-white" />
        </a>
        <img
          className="w-full h-full object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
          src={service.imageUrl}
          alt=""
        />
      </a>

      <div className="w-full max-w-sm pb-8 px-6 flex items-start justify-center flex-col gap-0">
        <div className="flex items-start justify-center flex-col gap-4">
          <h1 className="text-lg font-semibold">{service.title}</h1>

          <p className="text-sm text-gray-500 font-normal flex items-center justify-between flex-row gap-2">
            {service.description}
          </p>

          {showBtn && (
            <>
              <div className="w-full h-[1px] bg-primary-200 my-1 " />

              <a
                href={service.id}
                className="text-sm font-normal flex items-center justify-between flex-row gap-1 transition-all duration-300 hover:text-primary-200 hover:gap-2 "
              >
                Ver detalhes
                <span>
                  <ArrowRight size={16} className="text-primary-200" />
                </span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
