import { CardNews } from '../../../cards/CardNews'
import { FeatureHeaderCenter } from '../../FeatureHeaderCenter'

export function SectionBlog() {
  const ListNews = [
    {
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'In this hospital there are special surgeon.',
      description:
        'Realização de exames como raios-X, ultrassonografia, tomografia, análises clínicas e outros para diagnóstico preciso.',
      date: 'Agos 20, 2023'
    },
    {
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'In this hospital there are special surgeon.',
      description:
        'Realização de exames como raios-X, ultrassonografia, tomografia, análises clínicas e outros para diagnóstico preciso.',
      date: 'Agos 20, 2023'
    },
    {
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'In this hospital there are special surgeon.',
      description:
        'Realização de exames como raios-X, ultrassonografia, tomografia, análises clínicas e outros para diagnóstico preciso.',
      date: 'Agos 20, 2023'
    }
  ]

  const renderNews = ListNews.map((item, index) => {
    return <CardNews key={index} news={item} />
  })

  return (
    <>
      <div className="w-full">
        <div className="container py-24 px-6 flex flex-col justify-center items-start gap-10 text-baseDark ">
          <FeatureHeaderCenter subTitle="BLOGUE" title="Posts recentes" />

          <div className="w-full flex flex-col items-center justify-center gap-6 ">
            <div className="w-full grid grid-cols-3 gap-4 max-w-s-900:grid-cols-2 max-w-s-640:grid-cols-1 ">
              {renderNews}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
