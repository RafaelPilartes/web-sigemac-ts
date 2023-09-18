import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { BaseButton } from './buttons/baseButton'
import { routsNameMain } from '../data/routsName'

type SlidesDetailsItems = {
  slideUrl: string
  title: string
  description: string
  marking?: boolean
}
type SlidesDetailsProps = {
  slides: SlidesDetailsItems[]
}

export function CustomSlide({ slides }: SlidesDetailsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentSlide((prevSlide: any) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide: any) => (prevSlide - 1 + slides.length) % slides.length
    )
  }

  const navigateTo = (marking?: boolean) => {
    if (marking) {
      navigate(routsNameMain.marking)
    } else {
      navigate(routsNameMain.services)
    }
  }
  return (
    <div className="relative w-screen h-[calc(100vh-6rem)] flex items-center justify-center rounded-md">
      {slides.map((slides, index) => (
        <>
          <motion.div
            key={index}
            className={`absolute top-0 left-0 z-[1] w-full h-full bg-zinc-950/70 ${
              index === currentSlide
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          <motion.img
            key={index}
            src={slides.slideUrl}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full absolute object-cover ${
              index === currentSlide
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.3 }} // Tempo de duração da animação (ajuste conforme necessário)
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: index === currentSlide ? 1 : 0, y: 0 }}
            exit={{ opacity: index === currentSlide ? 1 : 0, y: 0 }}
            whileInView={{
              opacity: index === currentSlide ? 1 : 0,
              y: index === currentSlide ? 50 : 0
            }}
            transition={{ duration: 0.6 }}
            className={`absolute container z-[2] w-full inset-0 flex items-center justify-center px-4 ${
              index === currentSlide
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="px-12 flex justify-center items-start flex-col gap-8 text-baseTextWhite text-center">
              <h1 className="text-5xl font-bold max-w-s-520:text-3xl ">
                {slides.title}
              </h1>
              <p className="text-xl font-normal max-w-s-420:text-base ">
                {slides.description}
              </p>

              <div className="">
                <BaseButton
                  onclickBtn={() => navigateTo(slides.marking)}
                  iconRight={ArrowRight}
                  title={
                    slides.marking
                      ? 'Marcar consulta'
                      : 'Ver serviços disponiveis'
                  }
                  styleBtn="ShineLight"
                />
              </div>
            </div>
          </motion.div>
        </>
      ))}

      {/* Button  */}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 z-[3] transform translate-x-1/2 -translate-y-1/2 w-14 h-14 text-white text-2xl px-4 py-2 bg-baseText hover:bg-primary-200 active:bg-primary-700 rounded transition-all duration-200"
      >
        &lt;
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 z-[3] transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 text-white text-2xl px-4 py-2 bg-baseText hover:bg-primary-200 active:bg-primary-700 rounded transition-all duration-200"
      >
        &gt;
      </button>
    </div>
  )
}
