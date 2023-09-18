import { Plus } from 'lucide-react'
import { CardMinistry } from '../../../cards/CardMinistry'
import { FeatureHeaderLeft } from '../../FeatureHeaderLeft'

export function SectionMinistry() {
  return (
    <>
      <div className="w-full">
        <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
          <FeatureHeaderLeft
            subTitle="Ministérios"
            title="Nossos Ministérios"
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <CardMinistry
              imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
              title="Ministério de Música"
              date="01 de agosto de 2023"
            />
            <CardMinistry
              imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
              title="Ministério da Mulher"
              date="01 de agosto de 2023"
            />
            <CardMinistry
              imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
              title="Ministério de Ajuda"
              date="01 de agosto de 2023"
            />
          </div>
        </div>
      </div>
    </>
  )
}
