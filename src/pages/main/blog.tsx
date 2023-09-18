import { CustomHeaderPage } from '../../components/main/CustomHeaderPage'
import { SectionBlog } from '../../components/main/pages/blog/SectionBlog'

function Blog() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <CustomHeaderPage
          coveUrl="https://png.pngtree.com/background/20230525/original/pngtree-image-of-futuristic-medical-hospital-room-picture-image_2736851.jpg"
          currentPage="Blog"
          title="Blog da Clínica "
          description="compartilhamos informações valiosas sobre saúde, notícias da clínica e dicas de bem-estar. "
        />

        {/* Blog */}
        <SectionBlog />
      </div>
    </>
  )
}

export default Blog
