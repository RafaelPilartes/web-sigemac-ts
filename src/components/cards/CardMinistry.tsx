import { Calendar } from 'lucide-react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'

interface CardMinistryProps {
  imageUrl: string
  title: string
  date: string
}

export function CardMinistry({ imageUrl, title, date }: CardMinistryProps) {
  return (
    <a
      href="#"
      className="relative overflow-hidden w-full h-[26rem] max-w-xl group flex items-start justify-center flex-col gap-4 rounded-lg shadow-3xl text-white "
    >
      <img
        className="w-full h-full z-0 object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110"
        src={imageUrl}
        alt=""
      />
      <div className="w-full h-full z-2 bg-secondary-200/80 bg-gradient-to-b from-baseDark rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>

      <div className="w-full h-full z-[3] max-w-sm py-6 px-6 flex items-start justify-between flex-col gap-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-sm text-white bg-primary-200 transition-all duration-300 group-hover:bg-primary-500">
          <AiOutlinePlus className="text-white text-sm" />
        </div>

        <div className="flex items-start justify-center flex-col gap-4">
          <h1 className="text-2xl font-semibold">{title}</h1>

          <p className="relative pl-6 py-4 border-l-2 border-primary-200 text-sm ">
            <div className="w-7 h-[0.18rem] bg-primary-200 absolute -left-[1rem] top-5" />
            Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
    </a>
  )
}
