import { useContext, useState } from 'react'

import Dropdown from '../Dropdown'
import {
  Phone,
  Mail,
  UserCircle2,
  HeartHandshake,
  MapPin,
  DoorOpen,
  HeartPulse
} from 'lucide-react'
import { BaseButton } from '../buttons/baseButton'
import { routsNameMain } from '../../data/routsName'
import { CgMenuGridR } from 'react-icons/cg'
import { ModalMenuMobile } from '../modal/ModalMenuMobile'
import { AppContext } from '../../provider/AppProvider'
import { useNavigate } from 'react-router-dom'
import { DropdownUser } from '../DropdownUser'

export const Header = () => {
  const navigate = useNavigate()

  const { menuIsVisible, setMenuIsVisible } = useContext(AppContext)

  const logOut = () => {}
  function openMenu() {
    setMenuIsVisible(true)
  }

  function goToPage(uri: string) {
    navigate(uri)
  }

  const currentAdminData = null
  // {
  //   photo: 'https://images4.alphacoders.com/932/932012.jpg',
  //   first_name: 'Rafael',
  //   last_name: 'Pilartes',
  //   email: 'rafael@gmail.com'
  // }
  const options = [
    {
      icon: <DoorOpen />,
      label: 'Sair',
      onCLick: logOut
    }
  ]

  return (
    <>
      <ModalMenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <header className="w-full font-semibold ">
        {/* Container */}
        <div className="bg-white flex items-center justify-between max-w-s-1030:py-1 shadow-3xl ">
          {/* Links */}
          <div className="w-full flex items-center justify-between flex-col">
            {/* Top */}
            <div className="w-full flex px-6 items-center justify-center flex-row border-b border-l border-r border-gray-300 max-w-s-1030:border-b-transparent max-w-s-1030:justify-center">
              {/* Logo */}
              <div className="px-4 py-2 hidden max-w-s-1030:flex ">
                <img
                  src="/logo/logo.png"
                  alt="Logo sigemac"
                  className="w-full max-w-[14rem] min-w-[8rem] "
                />
              </div>

              {/* Contacts */}
              <div className="flex items-center justify-between flex-row gap-4 max-w-s-1030:hidden">
                <div className="customBasePadding gap-2">
                  <Phone size={14} className="text-primary-200" /> (+244) 923
                  414 621
                </div>
                <div className="customBasePadding gap-2">
                  <Mail size={14} className="text-primary-200" />{' '}
                  geral@sigemac.com
                </div>
                <div className="customBasePadding gap-2">
                  <MapPin size={14} className="text-primary-200" /> Luanda, Av.
                  4 de Fevereiro (Marginal de Luanda)
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="w-full max-w-7xl flex items-center justify-between flex-row max-w-s-1030:border-r border-gray-300 max-w-s-1030:hidden ">
              {/* Logo */}
              <div className="px-4 py-2  ">
                <img
                  src="/logo/logo.png"
                  alt="Logo sigemac"
                  className="w-full max-w-[14rem] min-w-[8rem] "
                />
              </div>

              {/* Links Nav */}
              <nav>
                <ul className="flex items-center justify-between flex-row">
                  <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                    <a href={routsNameMain.home}>Inicio</a>
                  </li>
                  <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                    <a href={routsNameMain.about}>Sobre</a>
                  </li>
                  <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                    <a href={routsNameMain.services}>Serviços</a>
                  </li>
                  <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                    <a href={routsNameMain.specialties}>Especialidades</a>
                  </li>
                  <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                    <a href={routsNameMain.blog}>Blog</a>
                  </li>
                  <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                    <a
                      href={routsNameMain.marking}
                      className="flex flex-row items-center justify-center gap-1"
                    >
                      <HeartPulse size={14} className="z-10" /> Marcação
                    </a>
                  </li>
                  <li className="customBasePadding hover:text-primary-200 transition-all duration-200">
                    <a href={routsNameMain.contacts}>Contactos</a>
                  </li>
                </ul>
              </nav>

              {/* Buttons Use */}
              <div className="customBasePadding">
                {!currentAdminData && (
                  <BaseButton
                    onclickBtn={() => goToPage(routsNameMain.login)}
                    icon={UserCircle2}
                    title="Fazer login"
                    styleBtn="ShineLight"
                  />
                )}

                {currentAdminData && (
                  <DropdownUser user={currentAdminData} options={options} />
                )}
              </div>
            </div>
          </div>

          {/* Right Button */}
          <div className="w-full max-w-[2rem] items-center justify-center customBaseMargin max-w-s-1030:flex hidden ">
            <button
              onClick={openMenu}
              className="transition-all duration-300 hover:text-primary-200 "
            >
              <CgMenuGridR size={38} />
              {/* <AiOutlineMenuUnfold /> */}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
