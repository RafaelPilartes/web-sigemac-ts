import { CustomHeaderPage } from '../../components/main/CustomHeaderPage'
import SectionContact from '../../components/main/pages/contacts/SectionContact'

function Contacts() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <CustomHeaderPage
          coveUrl="https://plus.unsplash.com/premium_photo-1661634739840-7261bcfad311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          currentPage="Contacto"
          title="Entre em contacto"
          description="Descubra mais sobre a Clínica da Marinha de Guerra Angolana. "
        />

        <SectionContact />
      </div>
    </>
  )
}

export default Contacts
