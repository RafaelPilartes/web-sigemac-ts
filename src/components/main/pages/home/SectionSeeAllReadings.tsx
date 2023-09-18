import { HeartPulse } from 'lucide-react'
import { BaseButton } from '../../../buttons/baseButton'

export function SectionSeeAllReadings() {
  return (
    <>
      <div className="w-full bg-homeQuote ">
        <div className="container py-20 px-6 flex flex-col justify-center items-center gap-10 text-white">
          <div className="w-24 h-24 bg-primary-200/70 rounded-full flex justify-center items-center">
            <div className="relative w-16 h-16 bg-primary-200/70 rounded-full flex justify-center items-center">
              <HeartPulse size={30} className="z-10" />
              <div className="absolute z-0 w-20 h-20 bg-primary-200/70 rounded-full flex justify-center items-center transition-all duration-300 animate-ping "></div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center">
            "Rezar! E ouça a Deus! Você pode fazer isso sozinho, mas encontre
            alguém para fazer isso com você”
          </h1>

          <p className="text-2xl text-center font-dancingScript">
            Jornada cruzada de história, de santidade em santidade
          </p>

          <div className="w-full max-w-[20rem] flex flex-col justify-center items-center customBaseMargin min-w-s-1390:flex">
            <BaseButton title="Plano de leitura" styleBtn="ShineLight" />
          </div>
        </div>
      </div>
    </>
  )
}
