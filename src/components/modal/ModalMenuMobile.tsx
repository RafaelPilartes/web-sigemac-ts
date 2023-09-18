import { HeartHandshake, HeartPulse, UserCircle2, X } from 'lucide-react'
import { routsNameMain } from '../../data/routsName'
import { AccordionLinks } from '../accordions/AccordionLinks'
import { BaseButton } from '../buttons/baseButton'
import { useNavigate } from 'react-router-dom'

interface ModalMenuMobileInterface {
  menuIsVisible: boolean
  setMenuIsVisible: (value: any) => void
}

export function ModalMenuMobile({
  menuIsVisible,
  setMenuIsVisible
}: ModalMenuMobileInterface) {
  const navigate = useNavigate()

  const openMenu = () => {
    setMenuIsVisible(!menuIsVisible)
  }

  function goToPage(uri: string) {
    navigate(uri)
  }

  return (
    <>
      <div
        className={`fixed z-50 -left-80 bg-white h-screen w-full max-w-[20rem] overflow-auto transition-all duration-500 ${
          menuIsVisible && 'left-0'
        }`}
      >
        <div className="relative flex items-start justify-start flex-col gap-4">
          <button
            onClick={openMenu}
            className="absolute right-3 top-3 p-2 bg-primary-200 text-white rounded-md "
          >
            <X />
          </button>

          {/* Logo */}
          <div className="w-full px-4 py-2">
            <img
              src="/logo/logo.png"
              alt="Logo CCI"
              className="w-full max-w-s-xs max-w-[10.6rem] min-w-[8rem] "
            />
          </div>

          {/* List Links */}
          <ul className="w-full flex flex-col">
            <li className="w-full flex items-start justify-start flex-col border-b-[0.1rem]">
              <a
                href={routsNameMain.home}
                className="w-full py-4 px-4 text-left font-bold text-base group transition-all hover:text-primary-200"
              >
                <span className="transition-all duration-300 group-hover:ml-2">
                  Inicio
                </span>
              </a>
            </li>

            <li className="w-full flex items-start justify-start flex-col border-b-[0.1rem]">
              <a
                href={routsNameMain.about}
                className="w-full py-4 px-4 text-left font-bold text-base group transition-all hover:text-primary-200"
              >
                <span className="transition-all duration-300 group-hover:ml-2">
                  Sobre
                </span>
              </a>
            </li>
            <li className="w-full flex items-start justify-start flex-col border-b-[0.1rem]">
              <a
                href={routsNameMain.services}
                className="w-full py-4 px-4 text-left font-bold text-base group transition-all hover:text-primary-200"
              >
                <span className="transition-all duration-300 group-hover:ml-2">
                  Serviços
                </span>
              </a>
            </li>
            <li className="w-full flex items-start justify-start flex-col border-b-[0.1rem]">
              <a
                href={routsNameMain.specialties}
                className="w-full py-4 px-4 text-left font-bold text-base group transition-all hover:text-primary-200"
              >
                <span className="transition-all duration-300 group-hover:ml-2">
                  Especialidades
                </span>
              </a>
            </li>

            <li className="w-full flex items-start justify-start flex-col border-b-[0.1rem]">
              <a
                href={routsNameMain.blog}
                className="w-full py-4 px-4 text-left font-bold text-base group transition-all hover:text-primary-200"
              >
                <span className="transition-all duration-300 group-hover:ml-2">
                  Blog
                </span>
              </a>
            </li>

            <li className="w-full flex items-start justify-start flex-col border-b-[0.1rem]">
              <a
                href={routsNameMain.marking}
                className="w-full py-4 px-4 text-left font-bold text-base group transition-all hover:text-primary-200"
              >
                <span className="flex flex-row items-center justify-start gap-1 transition-all duration-300 group-hover:ml-2">
                  <HeartPulse size={14} className="z-10" /> Marcação
                </span>
              </a>
            </li>

            <li className="w-full flex items-start justify-start flex-col border-b-[0.1rem]">
              <a
                href={routsNameMain.contacts}
                className="w-full py-4 px-4 text-left font-bold text-base group transition-all hover:text-primary-200"
              >
                <span className="transition-all duration-300 group-hover:ml-2">
                  Contactos
                </span>
              </a>
            </li>
          </ul>

          {/* Buttons Use */}
          <div className="customBasePadding">
            <BaseButton
              onclickBtn={() => goToPage(routsNameMain.login)}
              icon={UserCircle2}
              title="Fazer login"
              styleBtn="ShineLight"
            />
          </div>

          {/* <div className="customBasePadding">
            <BaseButton
              icon={HeartHandshake}
              title="COLABORE"
              styleBtn="LeftToRight"
            />
          </div> */}
        </div>
      </div>

      <button
        onClick={openMenu}
        className={`fixed z-40 bg-gray-950/80 backdrop-blur-[0.2rem] h-screen opacity-0 transition-all duration-300 ${
          menuIsVisible && 'w-screen opacity-100'
        } `}
      />
    </>
  )
}
