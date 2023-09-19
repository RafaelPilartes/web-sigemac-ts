import React from 'react'
import { CustomInput } from '../../../input/InputLabel'
import { TextAreaLabel } from '../../../input/TextAreaLabel'

interface Step3Props {
  onNextStep: () => void
  onPreviousStep: () => void
}

const Step3: React.FC<Step3Props> = ({ onNextStep, onPreviousStep }) => {
  // Conteúdo da primeira etapa

  return (
    <div className="py-4 flex flex-col items-start justify-center gap-6 ">
      <h2 className="text-sm font-normal ">
        Marcou uma consulta de{' '}
        <span className="font-semibold">Infectologia</span> com{' '}
        <span className="font-semibold">Drª. Neide Malandila</span> às{' '}
        <span className="font-semibold">0:00</span> em{' '}
        <span className="font-semibold">22 de Setembro, 2023</span>.
        <br />
        Por favor, forneça os seus detalhes no formulário abaixo para proceder
        com a marcação.
      </h2>

      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full grid gap-6 md:grid-cols-2">
          <CustomInput
            type="number"
            htmlFor="first_name"
            label="Telefone"
            placeholder="Ex.: Rafael"
          />
          <CustomInput
            type="text"
            htmlFor="first_name"
            label="E-mail"
            placeholder="Ex.: Rafael"
          />
        </div>

        <div className="w-full grid gap-6 md:grid-cols-1">
          <TextAreaLabel
            isDisabled={true}
            htmlFor="message"
            label="Observação"
            placeholder="Ex.: Observação 1"
            // error={errors.message}
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

export default Step3
