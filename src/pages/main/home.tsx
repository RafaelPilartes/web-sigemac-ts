import { useEffect } from 'react'

import Aos from 'aos'

import { CustomSlide } from '../../components/CustomSlide'
import { SectionNumbers } from '../../components/main/pages/home/SectionNumbers'
import { AboutUs } from '../../components/main/pages/home/AboutUs'
import { SectionServices } from '../../components/main/pages/home/SectionServices'
import { SectionCharacteristics } from '../../components/main/pages/home/SectionCharacteristics'
import { SectionSpecialties } from '../../components/main/pages/home/SectionSpecialties'
import { SectionSeeAllServices } from '../../components/main/pages/home/SectionSeeAllServices'
import { SectionBlog } from '../../components/main/pages/home/SectionBlog'

function Home() {
  const slidesHome: any = [
    {
      slideUrl:
        'https://s2-techtudo.glbimg.com/YjlW-zE8UVk_pDEJZj32rOC-fAo=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/A/3/u5RTehRFAuXjBYGJoA0g/mulher-negra-computador.jpeg',
      title: 'Agende Consultas com Facilidade',
      description:
        'Agora, você pode marcar suas consultas de forma rápida e conveniente com o novo sistema de agendamento online da Clínica da Marinha de Guerra Angolana. Evite a demora e agende sua consulta a qualquer hora, de qualquer lugar. Cuidar da sua saúde nunca foi tão simples.',
      marking: true
    },
    {
      slideUrl:
        'https://scontent.flad2-1.fna.fbcdn.net/v/t1.6435-9/33301706_1986773188031234_5363005686898753536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=3eSoGWUsGqIAX-kouTi&_nc_ht=scontent.flad2-1.fna&oh=00_AfDEI7nCKRDXCogdDFerRjGpM7wTPhuuzIbn0YSI6AIKuA&oe=652BBFAA',
      title: 'Honrando Nossos Heróis',
      description:
        'Oferecemos serviços de saúde especiais para nossos veteranos e antigos combatentes. Sabemos que vocês deram muito pelo nosso país, e estamos aqui para cuidar de vocês. Descubra nossos programas de apoio e atendimento personalizado.'
    },
    {
      slideUrl:
        'https://i0.wp.com/jornal.usp.br/wp-content/uploads/2023/07/20230710_paciente_hospital.jpg?fit=1200%2C630&ssl=1',
      title: 'Profissionais de Saúde Dedicados',
      description:
        'Conheça nossa equipe de médicos altamente qualificados e comprometidos em fornecer o melhor atendimento médico. Estamos aqui para cuidar de você e de sua família. Saiba mais sobre nossos especialistas e suas áreas de expertise.'
    }
  ]

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        {/* Custom Slide */}
        <div className="w-full h-full flex justify-center items-center">
          <CustomSlide slides={slidesHome} />
        </div>

        {/* Recent */}
        <SectionNumbers />

        {/* About Us */}
        <AboutUs />

        {/* Characteristics */}
        <SectionCharacteristics />

        {/* seeAllReadings */}
        <SectionSeeAllServices />

        {/* Services */}
        <SectionServices />

        {/* Specialties */}
        <SectionSpecialties />

        {/* Blog */}
        <SectionBlog />
      </div>
    </>
  )
}

export default Home
