import { CardInfoBgIcon } from '../../../cards/CardInfoBgIcon'
import { FeatureHeaderLeft } from '../../FeatureHeaderLeft'

export function SectionProcess() {
  return (
    <>
      <div className="w-full">
        <div className="container py-24 px-6 flex flex-col justify-center items-start gap-10 ">
          <FeatureHeaderLeft
            subTitle="Nosso processo"
            title="Porque escolher-nos"
            description="Estamos comprometidos em fornecer cuidados de saúde excepcionais e de alta qualidade para a comunidade militar e seus familiares. Aqui estão algumas razões pelas quais você deve escolher-nos como seu provedor de cuidados de saúde:"
          />

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row ">
            <CardInfoBgIcon
              typeIcon="img"
              urlIcon="/icon/medical-team.png"
              title="Equipe Médica Qualificada"
              description="Contamos com uma equipe de profissionais de saúde altamente qualificados, experientes e dedicados, que são especialistas em diversas áreas médicas."
            />
            <CardInfoBgIcon
              typeIcon="img"
              urlIcon="/icon/military.png"
              title="Parceria com a Comunidade Militar"
              description="Servimos com orgulho os membros das Forças Armadas Angolanas (FAA), antigos combatentes, paramilitares e civis trabalhadores das U/E/O castrenses."
            />
            <CardInfoBgIcon
              typeIcon="img"
              urlIcon="/icon/accessibility.png"
              title="Acessibilidade e Comodidade"
              description="Trabalhamos para tornar o acesso aos nossos serviços o mais conveniente possível. Isso inclui opções de agendamento flexíveis, atendimento de urgência 24 horas e serviços online."
            />
            <CardInfoBgIcon
              typeIcon="img"
              urlIcon="/icon/heart-rate.png"
              title="Tecnologia Avançada"
              description="Investimos em tecnologia médica moderna, incluindo equipamentos de última geração e instalações de primeira linha."
            />
          </div>
        </div>
      </div>
    </>
  )
}
