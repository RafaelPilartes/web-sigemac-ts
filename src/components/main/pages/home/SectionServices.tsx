import { BaseButton } from '../../../buttons/baseButton'
import { CardService } from '../../../cards/CardService'
import { FeatureHeaderCenter } from '../../FeatureHeaderCenter'

export function SectionServices() {
  const ListServices = [
    {
      imageUrl:
        'https://beepsaude.com.br/wp-content/uploads/2022/02/exames-masculinos_Beep-Saude.jpg',
      title: 'Exames de Diagnóstico',
      description:
        'Realização de exames como raios-X, ultrassonografia, tomografia, análises clínicas e outros para diagnóstico preciso.'
    },
    {
      imageUrl:
        'https://img.freepik.com/fotos-premium/ajuda-do-medico-de-cirurgia-e-cirurgiao-com-ferramentas-medicas-e-oculos-de-ampliacao-de-saude-para-hospital-trabalho-em-equipe-de-bem-estar-e-homem-negro-com-enfermeira-em-uma-clinica-de-saude-trabalhando-em-lesao-ou-emergencia-do-paciente_590464-146226.jpg',
      title: 'Cirurgias',
      description:
        'Procedimentos cirúrgicos realizados por uma equipe experiente em um ambiente cirúrgico seguro.'
    },
    {
      imageUrl:
        'https://img.freepik.com/fotos-gratis/assistente-medico-ajudando-paciente-com-exercicios-de-fisioterapia_23-2149071450.jpg',
      title: 'Fisioterapia',
      description:
        'Reabilitação física para recuperação de lesões e melhoria da mobilidade.'
    }
    // {
    //   imageUrl:
    //     'https://unifor.br/documents/392172/562305/cuidadospaliativos-800.jpg/ef18d4d1-d4e5-d105-df02-f196f791b713?t=1676314622268',
    //   title: 'Cuidados Pediátricos',
    //   description:
    //     'Serviços médicos especializados para crianças, incluindo vacinação e consultas pediátricas.'
    // },
    // {
    //   imageUrl:
    //     'https://www.clinicacroce.com.br/wp-content/uploads/2023/06/tratamento-da-psoriase-1200x438.jpg',
    //   title: 'Tratamentos Específicos',
    //   description:
    //     'Terapias e tratamentos específicos para condições médicas complexas, como diabetes, hipertensão, doenças crônicas, etc.'
    // },
    // {
    //   imageUrl:
    //     'https://cdn.eadplataforma.app/client/videoline/upload/product/photo/emergencia.jpg',
    //   title: 'Atendimento de Urgência e Emergência',
    //   description:
    //     'Serviço de atendimento de urgência 24 horas para situações que requerem cuidados imediatos.'
    // }
  ]

  const renderServices = ListServices.map((item, index) => {
    return <CardService key={index} service={item} />
  })

  return (
    <>
      <div className="w-full">
        <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
          <FeatureHeaderCenter
            subTitle="SERVIÇOS E TRATAMENTOS"
            title="Oferecemos uma ampla gama de serviços médicos"
          />

          <div className="w-full flex flex-col items-center justify-center gap-6 ">
            <div className="w-full grid grid-cols-3 gap-4 max-w-s-900:grid-cols-2 max-w-s-640:grid-cols-1">
              {renderServices}
            </div>
            <div className="z-[2] flex flex-col justify-center items-center customBaseMargin min-w-s-1390:flex">
              <BaseButton title="Ver todos os serviços" styleBtn="ShineLight" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
