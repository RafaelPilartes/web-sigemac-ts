import { ArrowRight, BookOpen, Calendar } from 'lucide-react'

interface CardNewsInterface {
  imageUrl: string
  title: string
  description: string
  date: string
}

interface CardNewsProps {
  news: CardNewsInterface
}

export function CardNews({ news }: CardNewsProps) {
  return (
    <div className=" w-full flex items-start justify-center flex-col gap-4 rounded-lg shadow-3xl ">
      <a
        href="#"
        className="relative w-full h-60 overflow-hidden flex items-start justify-start"
      >
        <a className="relative w-12 h-12 z-[2] flex items-center justify-center bg-primary-200">
          <div className="absolute z-0 top-0 left-0 w-12 h-12 bg-primary-200/70 flex justify-center items-center transition-all duration-00 animate-ping "></div>
          <BookOpen size={24} className="text-white" />
        </a>
        <img
          className="w-full h-full object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
          src={news.imageUrl}
          alt=""
        />
      </a>

      <div className="w-full pb-8 px-6 flex items-center justify-center gap-6 text-baseTxtDark">
        <div className="flex items-start justify-center flex-col gap-4">
          <a href="#" className="text-lg font-semibold">
            {news.title}
          </a>

          <div className="h-[4rem] overflow-hidden relative">
            <a href="#" className="line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos itaque ut, error quis delectus illo accusantium
              laborum debitis nobis facilis blanditiis nam odit accusamus
              explicabo rem non officiis voluptatum corporis.
            </a>
          </div>

          <div className="w-full h-[1px] bg-primary-200 my-4 " />

          <div className="w-full flex items-center justify-between flex-row gap-4">
            <a
              href="#"
              className="text-sm  font-normal flex items-center justify-between flex-row gap-1 transition-all duration-300 hover:text-primary-200 hover:gap-2 "
            >
              Continuar lendo
              <span>
                <ArrowRight size={16} className="text-primary-200" />
              </span>
            </a>

            <p className="text-sm  font-normal flex items-center justify-between flex-row gap-2">
              <span>
                <Calendar size={16} className="text-primary-200" />
              </span>
              {news.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
