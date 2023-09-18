import { CustomHeaderPage } from '../../components/main/CustomHeaderPage'
import { AboutUs } from '../../components/main/pages/about/AboutUs'
import { SectionProcess } from '../../components/main/pages/about/SectionProcess'
import { SectionNumbers } from '../../components/main/pages/home/SectionNumbers'

function About() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <CustomHeaderPage
          coveUrl="https://i0.wp.com/jornal.usp.br/wp-content/uploads/2023/07/20230710_paciente_hospital.jpg?fit=1200%2C630&ssl=1"
          currentPage="Sobre Nós"
          title="Sobre Nós"
          description="Descubra mais sobre a Clínica da Marinha de Guerra Angolana. "
        />

        {/* Recent */}
        <SectionNumbers />

        {/* About Us */}
        <AboutUs />

        {/* Process */}
        <SectionProcess />
      </div>
    </>
  )
}

export default About
