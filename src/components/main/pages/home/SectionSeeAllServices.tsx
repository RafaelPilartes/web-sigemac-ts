import { HeartPulse } from 'lucide-react'
import { BaseButton } from '../../../buttons/baseButton'

export function SectionSeeAllServices() {
  return (
    <>
      <div className="relative w-full bg-homeQuote ">
        <div
          className={`absolute top-0 left-0 z-[1] w-full h-full bg-blue-950/70 pointer-events-none'}`}
        />

        <div className="container py-20 px-6 flex flex-col justify-center items-center gap-10 text-white">
          <div className="z-[2] w-24 h-24 bg-primary-200/70 rounded-full flex justify-center items-center">
            <div className="relative w-16 h-16 bg-primary-200/70 rounded-full flex justify-center items-center">
              <HeartPulse size={30} className="z-10" />
              <div className="absolute z-0 w-20 h-20 bg-primary-200/70 rounded-full flex justify-center items-center transition-all duration-300 animate-ping "></div>
            </div>
          </div>

          <h1 className="z-[2] text-4xl font-bold text-center">
            "Dedicados ao Seu Bem-Estar: Oferecemos uma Amplíssima Gama de
            Serviços Médicos de Primeira Qualidade, para satisfazer as suas
            necessidades!”
          </h1>

          <p className="z-[2] text-2xl text-center font-dancingScript">
            Na Clínica da Marinha de Guerra Angolana, estamos totalmente
            comprometidos com a sua saúde e bem-estar.
          </p>

          <div className="z-[2] flex flex-col justify-center items-center customBaseMargin min-w-s-1390:flex">
            <BaseButton title="Serviços Médicos" styleBtn="ShineLight" />
          </div>
        </div>
      </div>
    </>
  )
}
