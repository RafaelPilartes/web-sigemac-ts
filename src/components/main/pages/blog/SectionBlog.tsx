import { CardNews } from '../../../cards/CardNews'

export function SectionBlog() {
  const ListNews = [
    {
      id: 1,
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'Os Benefícios da Atividade Física Regular',
      description:
        'Descubra como a atividade física regular pode melhorar sua saúde geral e bem-estar.',
      date: '2023-09-14'
    },
    {
      id: 2,
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'Alimentação Saudável: Dicas para uma Dieta Equilibrada',
      description:
        'Aprenda a fazer escolhas alimentares saudáveis e a manter uma dieta equilibrada.',
      date: '2023-09-10'
    },
    {
      id: 3,
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'Como Lidar com o Estresse no Trabalho',
      description:
        'Dicas práticas para gerenciar o estresse no ambiente de trabalho e melhorar sua qualidade de vida.',
      date: '2023-09-05'
    },
    {
      id: 4,
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'A Importância do Sono para a Saúde',
      description:
        'Saiba como o sono adequado desempenha um papel crucial na sua saúde física e mental.',
      date: '2023-08-28'
    },
    {
      id: 5,
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'Como Manter um Coração Saudável',
      description:
        'Dicas para manter a saúde do coração e prevenir doenças cardiovasculares.',
      date: '2023-08-20'
    },
    {
      id: 6,
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'Nutrição Infantil: Alimentos Essenciais para Crianças',
      description:
        'Descubra quais alimentos são essenciais para o crescimento saudável das crianças.',
      date: '2023-08-15'
    },
    {
      id: 7,
      imageUrl:
        'https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d',
      title: 'Meditação e Relaxamento: Benefícios para a Saúde Mental',
      description:
        'Aprenda como a meditação e o relaxamento podem melhorar sua saúde mental e reduzir o estresse.',
      date: '2023-08-08'
    }
  ]

  const renderNews = ListNews.map((item, index) => {
    return <CardNews key={index} news={item} />
  })

  return (
    <>
      <div className="w-full">
        <div className="container py-24 px-6 flex flex-col justify-center items-start gap-10 text-baseDark ">
          <div className="w-full flex flex-col items-center justify-center gap-6 ">
            <div className="w-full grid grid-cols-3 gap-6 max-w-s-900:grid-cols-2 max-w-s-640:grid-cols-1 ">
              {renderNews}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
