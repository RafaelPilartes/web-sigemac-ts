import { CustomHeaderPage } from '../../components/main/CustomHeaderPage'
import { SectionSpecialties } from '../../components/main/pages/specialties/SectionSpecialties'

function Specialties() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <CustomHeaderPage
          coveUrl="https://templates.hibootstrap.com/medsev/default/assets/img/blog/1.jpg"
          currentPage="Especialidades"
          title="Especialidades Médicas"
          description="Uma variedade de especialidades médicas para atender às necessidades. "
        />

        {/* Specialties */}
        <SectionSpecialties />
      </div>
    </>
  )
}

export default Specialties
