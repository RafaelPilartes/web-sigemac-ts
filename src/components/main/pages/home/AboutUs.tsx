import { Plus, ArrowRight, CheckCircle2, Goal, HeartPulse } from 'lucide-react'
import { BaseButton } from '../../../buttons/baseButton'
import { CardInfoIcon } from '../../../cards/CardInfoIcon'

export function AboutUs() {
  return (
    <>
      <div className="w-full">
        <div className="container flex flex-col items-center justify-center gap-8 py-32 px-16 lg:flex-row ">
          <div className="flex-1 flex items-center justify-center ">
            <img
              alt=""
              src="https://thumbs.dreamstime.com/b/african-american-black-doctor-man-over-blue-background-89746088.jpg"
              className="w-full zoom max-w-md"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
              <HeartPulse size={18} />
              <span className="text-base font-bold uppercase">
                Temos mais de 20 anos de experiência
              </span>
            </h2>

            <h1 className="text-4xl font-bold max-w-s-1030:text-3xl ">
              Sobre a Clínica da Marinha de Guerra Angolana
            </h1>

            <p>
              A Clínica da Marinha de Guerra Angolana é uma instituição dedicada
              à prestação de cuidados de saúde de alta qualidade aos militares
              das Forças Armadas Angolanas (FAA), antigos combatentes,
              paramilitares, civis trabalhadores das U/E/O castrenses e seus
              familiares. Nossa missão é garantir o bem-estar e a saúde daqueles
              que serviram e continuam a servir nosso país.
            </p>

            <div className="flex flex-col items-center justify-start gap-4 sm:flex-row ">
              <CardInfoIcon
                icon={Goal}
                title="Nossa Visão"
                description="Buscamos ser uma referência na prestação de cuidados de saúde de excelência, promovendo o bem-estar e a qualidade de vida."
              />
              <CardInfoIcon
                icon={CheckCircle2}
                title="Valores Fundamentais"
                description="Compromisso, Integridade, Respeito e Excelência."
              />
            </div>

            <div className="w-full max-w-[10rem] min-w-s-1390:flex">
              <BaseButton
                iconRight={ArrowRight}
                title="SABER MAIS"
                styleBtn="LeftToRight"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
