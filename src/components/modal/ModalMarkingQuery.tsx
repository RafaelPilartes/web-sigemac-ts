import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { ToastContainer } from 'react-toastify'
import { customStylesModalCenter } from '../../styles/custom/modals'
import { AlertArea } from '../AlertArea'
import MultiStepForm from '../main/pages/marking/MultiStepFormMarking'
import { CalendarHeart } from 'lucide-react'

type modalType = {
  handleUpdateListing: () => void
  modalMarkingQueryIsOpen: boolean
  setModalMarkingQueryIsOpen: (e: boolean) => void
}

export function ModalMarkingQuery({
  handleUpdateListing,
  modalMarkingQueryIsOpen,
  setModalMarkingQueryIsOpen
}: modalType) {
  const [isSend, setIsSend] = useState<boolean>(false)

  function closeModal() {
    setModalMarkingQueryIsOpen(false)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  useEffect(() => {
    setIsSend(false)
  }, [])
  return (
    <>
      <Modal
        isOpen={modalMarkingQueryIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStylesModalCenter}
        contentLabel="Example Modal"
      >
        <div className="w-full h-full flex items-center justify-center  ">
          <ToastContainer />

          <div className="w-full h-auto max-h-[90%] max-w-6xl flex flex-col items-center p-0  rounded-md overflow-y-auto bg-light overflow-x-hidden scroll-smooth">
            <div className="w-full py-8 px-8 ">
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <h1 className="relative flex items-center justify-start gap-2 text-primary-200">
                  <CalendarHeart size={24} />
                  <span className="text-2xl font-bold uppercase">
                    Agendamento online
                  </span>
                </h1>

                <p className="text-base font-normal">
                  Oferecemos a opção de agendamento online para facilitar sua
                  vida. Preencha o formulario abaixo para marcar sua consulta
                  agora:
                </p>
              </div>
              <br />
              <AlertArea
                type="warning"
                message={
                  'Alerta de aviso! A opção de agendamento ainda não está disponível dado que a sua conta aguarda validação pelos nossos serviços..'
                }
              />
              <AlertArea
                type="info"
                message={
                  'Alerta de aviso! Efetue o "login" ou "registre-se" para que possa agendar uma consulta.'
                }
              />

              <MultiStepForm />

              <button
                onClick={closeModal}
                type="submit"
                // disabled={isSend}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <span>Fechar</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
