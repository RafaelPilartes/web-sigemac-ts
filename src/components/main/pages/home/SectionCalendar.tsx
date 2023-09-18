import { FeatureHeaderCenter } from '../../FeatureHeaderCenter'

export function SectionCalendar() {
  return (
    <>
      <div className="w-full">
        <div className="container py-20 px-6 flex flex-col justify-center items-start gap-10 ">
          <FeatureHeaderCenter
            subTitle="CALENDÁRIO"
            title="Horários da semana"
          />
        </div>

        <div className="relative w-full overflow-x-auto px-6">
          <table className="container w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-sm uppercase bg-secondary-200 text-white">
              <tr>
                <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                  Domingo
                </th>
                <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                  Quarta-feira
                </th>
                <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                  Sexta-feira
                </th>
                <th scope="col" className="px-6 py-6 min-w-[14rem] ">
                  Sábado
                </th>
              </tr>
            </thead>

            <tbody className="font-semibold">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-6 min-w-[14rem] ">
                  <p className="flex flex-row justify-start items-center">
                    <span className="mr-6">07:00</span>
                    1º Culto
                  </p>
                </td>
                <td className="px-6 py-6 min-w-[14rem] ">
                  <p className="flex flex-row justify-start items-center">
                    <span className="mr-6">18:00</span>
                    Culto
                  </p>
                </td>
                <td className="px-6 py-6 min-w-[14rem] ">
                  <p className="flex flex-row justify-start items-center">
                    <span className="mr-6">18:00</span>
                    Culto
                  </p>
                </td>
                <td className="px-6 py-6 min-w-[14rem] ">
                  <p className="flex flex-row justify-start items-center">
                    <span className="mr-6">07:00</span>
                    Culto dos jovens
                  </p>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-6 min-w-[14rem] ">
                  <p className="flex flex-row justify-start items-center">
                    <span className="mr-6">10:00</span>
                    2º Culto
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
