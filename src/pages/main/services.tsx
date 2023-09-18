import { CustomHeaderPage } from '../../components/main/CustomHeaderPage'
import { SectionServices } from '../../components/main/pages/service/SectionServices'

function Services() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <CustomHeaderPage
          coveUrl="https://templates.hibootstrap.com/medsev/default/assets/img/blog/1.jpg"
          currentPage="Serviços"
          title="Nossos serviços"
          description="Fornecemos uma ampla gama de serviços médicos e tratamentos para atender às suas necessidades de saúde. "
        />

        {/* Services */}
        <SectionServices />
      </div>
    </>
  )
}

export default Services
