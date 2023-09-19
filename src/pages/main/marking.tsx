import { useState } from 'react'

import { CalendarHeart, Plus } from 'lucide-react'
import { CustomHeaderPage } from '../../components/main/CustomHeaderPage'
import { AlertArea } from '../../components/AlertArea'
import MultiStepForm from '../../components/main/pages/marking/MultiStepFormMarking'
import { ModalMarkingQuery } from '../../components/modal/ModalMarkingQuery'
import { TableRowMarking } from '../../components/table/TableRowMessage'

function Marking() {
  const [modalMarkingQueryIsOpen, setModalMarkingQueryIsOpen] =
    useState<boolean>(false)

  const rowsData = [
    {
      id: '1',
      tipo_consulta: 'Presencial',
      especialidade: 'Ginecologista',
      medico: 'Dr. Rafael Pilartes',
      estado: 'Esperando aprovação',
      data: '11/11/2023',
      hora: '11:00'
    }
  ]

  function openModalSeeRow() {}
  function openModalEditRow() {}
  function handleDeleteRow() {}
  const rowsTable = rowsData?.map((item, index) => {
    return (
      <TableRowMarking
        key={index}
        rowItem={item}
        openModalSeeRow={openModalSeeRow}
        openModalEditRow={openModalEditRow}
        handleDeleteRow={handleDeleteRow}
      />
    )
  })

  function handleUpdateListing() {}

  function openModalMarkingQuery() {
    setModalMarkingQueryIsOpen(true)
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <CustomHeaderPage
          coveUrl="https://revistaleia.com/wp-content/uploads/2020/06/como-sincronizar-o-agendamento-online-com-o-seu-perfil-medico-online.jpg"
          currentPage="Marcação"
          title="Marcação de Consulta"
          description="Tornamos mais fácil para você marcar suas consultas médicas. "
        />

        <div className="w-full">
          <div className="container py-36 px-6 flex flex-col justify-center items-start gap-10 ">
            <button
              onClick={openModalMarkingQuery}
              className="py-2 px-4 rounded-lg bg-primary-200 text-white hover:bg-primary-500 active:bg-primary-700 flex flex-row items-center justify-center gap-4 transition-all duration-300 "
            >
              <Plus />
              Marcar consulta
            </button>

            <div className="w-full flex flex-col items-start justify-center gap-4">
              <h1 className="relative flex items-center justify-start gap-2 text-primary-200">
                <CalendarHeart size={24} />
                <span className="text-2xl font-bold uppercase">
                  Minhas Marcações
                </span>
              </h1>

              <p className="text-base font-normal">
                Colocamos você no controle de suas consultas. Com o nosso
                sistema de "Minhas Marcações", você pode facilmente visualizar e
                gerenciar todas as suas consultas agendadas.
              </p>
            </div>

            {/* Marking */}
            <AlertArea
              type="info"
              message={
                'Faça login na sua conta usando seu e-mail e senha. Se você ainda não possui uma conta, pode criar uma facilmente.'
              }
            />

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-sm font-thin bg-gray-300/40 dark:bg-gray-500/40 ">
                <tr className="border-b dark:border-gray-700">
                  <th scope="col" className="px-3 py-3 w-[0rem] ">
                    Id
                  </th>
                  <th scope="col" className="px-3 py-3 min-w-[6rem] ">
                    Tipo de Consulta
                  </th>

                  <th scope="col" className="px-3 py-3 min-w-[6rem] ">
                    Especialidade
                  </th>
                  <th scope="col" className="px-3 py-3 min-w-[6rem] ">
                    Médico
                  </th>
                  <th scope="col" className="px-3 py-3 min-w-[6rem] ">
                    Estado
                  </th>
                  <th scope="col" className="px-3 py-3 min-w-[6rem] ">
                    Data
                  </th>
                  <th scope="col" className="px-3 py-3 min-w-[6rem] ">
                    Ação
                  </th>
                </tr>
              </thead>

              <tbody>{rowsTable}</tbody>
            </table>
          </div>
        </div>

        {modalMarkingQueryIsOpen && (
          <ModalMarkingQuery
            handleUpdateListing={handleUpdateListing}
            modalMarkingQueryIsOpen={modalMarkingQueryIsOpen}
            setModalMarkingQueryIsOpen={setModalMarkingQueryIsOpen}
          />
        )}
      </div>
    </>
  )
}

export default Marking
