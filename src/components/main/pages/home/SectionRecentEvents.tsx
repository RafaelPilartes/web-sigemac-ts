import { CardEvent } from '../../../cards/CardEvent'

export function RecentEvents() {
  return (
    <>
      <div className="w-full flex items-center justify-center py-8 px-8 ">
        <div className="container -mt-16 flex flex-col items-center justify-center gap-6 z-10 lg:flex-row ">
          {/* Item 1 */}
          <CardEvent
            imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
            title="Encontro das mulheres"
            date="Agost 20"
            time="8:00 - 17:00"
            location="56 Thatcher Avenue River Forest Chicago, IL United, States"
          />
          <CardEvent
            imageUrl="https://6bda5dde2d.cbaul-cdnwnd.com/c5e7d2d140da0c3b19bbd0e6eb923453/200000310-1a5a51a5a7/IMG-20191022-WA0657-2.jpg?ph=6bda5dde2d"
            title="Encontro das mulheres"
            date="Agost 20"
            time="8:00 - 17:00"
            location="56 Thatcher Avenue River Forest Chicago, IL United, States"
          />
        </div>
      </div>
    </>
  )
}
