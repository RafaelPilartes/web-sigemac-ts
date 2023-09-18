import { Bed, Clock3, UserCheck2 } from 'lucide-react'
import { FaUserDoctor } from 'react-icons/fa6'
import { RiMedalFill } from 'react-icons/ri'

export function SectionNumbers() {
  return (
    <>
      <div className="w-full flex items-center justify-center py-8 px-8 ">
        <div className="container -mt-16 flex flex-col items-center justify-center gap-6 z-[2] lg:flex-row ">
          <div className="bg-white bg-word bg-no-repeat w-full p-4 grid grid-cols-4 max-w-s-960:grid-cols-2 max-w-s-520:grid-cols-1 gap-4 rounded-lg shadow-3xl ">
            {/* Number 1 */}
            <div className="w-full max-w-xl px-8 flex items-center justify-center flex-col gap-4 ">
              <Bed size={36} className="text-primary-200" />
              <span className="text-5xl font-bold text-primary-200 max-w-s-1200:text-3xl ">
                850
              </span>
              <span className="text-xl font-semibold text-gray-500 max-w-s-1200:text-base text-center ">
                Camas de pacientes
              </span>
            </div>
            {/* Number 2 */}
            <div className="w-full max-w-xl px-8 flex items-center justify-center flex-col gap-4 ">
              <UserCheck2 size={36} className="text-primary-200" />
              <span className="text-5xl font-bold text-primary-200 max-w-s-1200:text-3xl ">
                2,500 +
              </span>
              <span className="text-xl font-semibold text-gray-500 max-w-s-1200:text-base text-center ">
                Pacientes atendidos
              </span>
            </div>
            {/* Number 3 */}
            <div className="w-full max-w-xl px-8 flex items-center justify-center flex-col gap-4 ">
              <FaUserDoctor size={36} className="text-primary-200" />
              <span className="text-5xl font-bold text-primary-200 max-w-s-1200:text-3xl ">
                750
              </span>
              <span className="text-xl font-semibold text-gray-500 max-w-s-1200:text-base text-center ">
                Médicos e Enfermeiros
              </span>
            </div>
            {/* Number 4 */}
            <div className="w-full max-w-xl px-8 flex items-center justify-center flex-col gap-4 ">
              <RiMedalFill size={36} className="text-primary-200" />
              <span className="text-5xl font-bold text-primary-200 max-w-s-1200:text-3xl ">
                20
              </span>
              <span className="text-xl font-semibold text-gray-500 max-w-s-1200:text-base text-center ">
                Ano de Experiência
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
