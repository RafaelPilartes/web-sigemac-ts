import { Outlet } from 'react-router-dom'
import { Header } from '../components/main/Header'
import { Footer } from '../components/main/Footer'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { ImCalendar } from 'react-icons/im'
import { TbSos } from 'react-icons/tb'
import { routsNameMain } from '../data/routsName'

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />

      <div className="w-20 fixed z-[5] bottom-6 right-4 flex flex-col items-center justify-center gap-4 ">
        <button className="relative w-14 h-14 group bg-primary-200 text-white text-4xl flex flex-col items-center justify-center rounded-full p-3 hover:scale-110 transition-all duration-200 active:scale-100 ">
          <TbSos />
          {/* tooltip */}
          <div
            className="absolute pr-14 right-[-12px] opacity-0
              pointer-events-none transition-all duration-300 xl:group-hover:opacity-100 xl:group-hover:right-0"
          >
            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
              <div className="text-[12px] text-baseTxtDark leading-none font-semibold capitalize">
                Emergencia
              </div>

              {/* triangle */}
              <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
            </div>
          </div>
        </button>

        {/* Marking */}
        <a
          href={routsNameMain.marking}
          className="relative w-14 h-14 group bg-primary-200 text-white text-2xl flex flex-col items-center justify-center rounded-full p-3 hover:scale-110 transition-all duration-200 active:scale-100"
        >
          <ImCalendar />
          {/* tooltip */}
          <div
            className="absolute pr-14 right-[-12px] opacity-0
              pointer-events-none transition-all duration-300 xl:group-hover:opacity-100 xl:group-hover:right-0"
          >
            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
              <div className="text-[12px] text-baseTxtDark leading-none font-semibold capitalize">
                Marcação
              </div>

              {/* triangle */}
              <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
            </div>
          </div>
        </a>

        {/* WhatsApp */}
        <a className="relative w-14 h-14 group bg-[#25D366] text-white text-4xl flex items-center justify-center rounded-full p-3 hover:scale-110 transition-all duration-200 active:scale-100">
          <AiOutlineWhatsApp />
          {/* tooltip */}
          <div
            className="absolute pr-14 right-[-12px] opacity-0
              pointer-events-none transition-all duration-300 xl:group-hover:opacity-100 xl:group-hover:right-0"
          >
            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
              <div className="text-[12px] text-baseTxtDark leading-none font-semibold capitalize">
                Whatsapp
              </div>

              {/* triangle */}
              <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
            </div>
          </div>
        </a>
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
