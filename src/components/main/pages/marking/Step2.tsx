import React from 'react'
import { CustomInput } from '../../../input/InputLabel'

interface Step2Props {
  onNextStep: () => void
  onPreviousStep: () => void
}

const Step2: React.FC<Step2Props> = ({ onNextStep, onPreviousStep }) => {
  // Conteúdo da primeira etapa

  return (
    <div className="py-4 flex flex-col items-start justify-center gap-6 ">
      <h2 className="text-sm font-normal ">
        Por favor, escolha o horário disponível para consulta de{' '}
        <span className="font-semibold">Infectologia</span> com{' '}
        <span className="font-semibold">Drª. Neide Malandila.</span>
        <br />
        Selecione a data e o horário para prosseguir com a marcação.
      </h2>

      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full grid gap-6 md:grid-cols-2">
          <CustomInput
            type="date"
            htmlFor="first_name"
            label="Marca em ou depois de"
            placeholder="Ex.: Rafael"
          />
          <CustomInput
            type="time"
            htmlFor="first_name"
            label="As "
            placeholder="Ex.: Rafael"
          />
        </div>
      </div>

      <div className="w-full pt-4 flex flex-row justify-between items-center border-t-[1px] border-gray-400 ">
        <button
          onClick={onPreviousStep}
          className="flex flex-row items-center justify-center py-3 px-6 text-baseTextWhite bg-primary-200 rounded-lg hover:bg-primary-600 active:bg-primary-400 active:scale-95 transition-all duration-300 "
        >
          Voltar
        </button>
        <button
          onClick={onNextStep}
          className="flex flex-row items-center justify-center py-3 px-4 text-baseTextWhite bg-primary-200 rounded-lg hover:bg-primary-600 active:bg-primary-400 active:scale-95 transition-all duration-300 "
        >
          Próxima Etapa
        </button>
      </div>
    </div>
  )
}

export default Step2
