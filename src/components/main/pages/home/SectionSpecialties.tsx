import { FeatureHeaderCenter } from '../../FeatureHeaderCenter'
import { CardService } from '../../../cards/CardService'

export function SectionSpecialties() {
  const ListSpecialties = [
    {
      id: '1',
      imageUrl:
        'https://img.freepik.com/fotos-premium/uma-mulher-com-um-jaleco-branco-esta-em-um-hospital-com-os-bracos-cruzados_889227-23116.jpg',
      title: 'Clínico Geral',
      description:
        'Cuidados de saúde abrangentes para avaliação da saúde geral e tratamento de condições médicas comuns.'
    },
    {
      id: '2',
      imageUrl:
        'https://st2.depositphotos.com/4218696/49237/i/450/depositphotos_492372258-stock-photo-childrens-health-black-pediatrician-doctor.jpg',
      title: 'Pediatra',
      description:
        'Cuidados médicos especializados para crianças, incluindo exames de saúde infantil e tratamento de doenças pediátricas.'
    },
    {
      id: '3',
      imageUrl:
        'https://st4.depositphotos.com/4218696/38149/i/450/depositphotos_381492198-stock-photo-female-dentist-showing-male-patient.jpg',
      title: 'Dentista',
      description:
        'Serviços odontológicos para cuidar da sua saúde bucal, incluindo exames dentários, limpeza e tratamento odontológico.'
    },
    {
      id: '4',
      imageUrl:
        'https://static.tuasaude.com/media/article/ot/rs/obstetra_55965_l.jpg',
      title: 'Obstetra',
      description:
        'Acompanhamento médico para gestantes, cuidados pré-natais, partos e cuidados pós-parto.'
    }
    // {
    // id: '5',
    //   imageUrl:
    //     'https://www.clinicacroce.com.br/wp-content/uploads/2023/06/tratamento-da-psoriase-1200x438.jpg',
    //   title: 'Ginecologista',
    //   description:
    //     'Cuidados de saúde para mulheres, incluindo exames ginecológicos, tratamento de doenças ginecológicas e saúde reprodutiva.'
    // },
    // {
    // id: '6',
    //   imageUrl:
    //     'https://cdn.eadplataforma.app/client/videoline/upload/product/photo/emergencia.jpg',
    //   title: 'Analista Clínico',
    //   description:
    //     'Análise de exames de sangue e diagnóstico laboratorial para auxiliar no tratamento médico.'
    // },
    // {
    // id: '7',
    //   imageUrl:
    //     'https://cdn.eadplataforma.app/client/videoline/upload/product/photo/emergencia.jpg',
    //   title: 'Farmacêutico',
    //   description:
    //     'Orientação sobre medicamentos, gestão de prescrições e informações sobre farmacologia.'
    // }
  ]

  const renderSpecialties = ListSpecialties.map((item, index) => {
    return <CardService key={index} service={item} />
  })

  return (
    <>
      <div className="relative w-full mt-24 bg-homeQuote ">
        <div
          className={`absolute top-0 left-0 z-[1] w-full h-full bg-gray-950/90 pointer-events-none'}`}
        />
        <div className="container py-20 px-6 flex flex-col justify-center items-center gap-10 text-white">
          <div className="z-[3]">
            <FeatureHeaderCenter
              subTitle="Especialidades Médicas"
              title="Especialistas em diversas áreas da medicina para atender às suas necessidades de saúde"
            />
          </div>

          <div className="w-full z-[3] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {renderSpecialties}
          </div>
        </div>
      </div>
    </>
  )
}
