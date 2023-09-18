import { Plus } from 'lucide-react'
import { CardInfoBigIcon } from '../../../cards/CardInfoBigIcon'
import { FeatureHeaderLeft } from '../../FeatureHeaderLeft'

export function SectionCharacteristics() {
  return (
    <>
      <div className="w-full">
        <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
          <FeatureHeaderLeft
            subTitle="CARACTERÍSTICAS"
            title="Como podemos ajudar"
            description="Na Clínica da Marinha de Guerra Angolana, nos esforçamos para oferecer o mais alto padrão de cuidados de saúde e experiência ao paciente. Ao escolher nossa clínica, você terá acesso a uma série de benefícios e diferenciais que valorizamos profundamente:"
          />

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row ">
            <CardInfoBigIcon
              typeIcon="img"
              urlIcon="/icon/healthcare.png"
              title="Excelência Médica"
              description="Contamos com uma equipe de profissionais altamente qualificados e experientes que estão comprometidos com a excelência no atendimento médico."
            />
            <CardInfoBigIcon
              typeColor="primary"
              urlIcon="/icon/artificial-intelligence.png"
              title="Tecnologia de Ponta"
              description="Investimos em tecnologia médica avançada para fornecer diagnósticos precisos e tratamentos eficazes, mantendo-nos atualizados com os avanços médicos."
            />
            <CardInfoBigIcon
              typeColor="secondary"
              urlIcon="/icon/appointment.png"
              title="Agendamento de Consultas"
              description="Com nossa plataforma online, é fácil e conveniente agendar consultas, permitindo que você escolha os horários que melhor se adequem à sua agenda."
            />
          </div>
        </div>
      </div>
    </>
  )
}
