import React from 'react'
import { SelectCustomLabel } from '../../../selects/SelectCustomLabel'

interface Step1Props {
  onNextStep: () => void
  onPreviousStep: () => void
}

const Step1: React.FC<Step1Props> = ({ onNextStep, onPreviousStep }) => {
  const areasOptions = [
    { value: 'Administração', label: 'Administração ' },
    { value: 'Finanças', label: 'Finanças ' },
    { value: 'Comunicação', label: 'Comunicação e imagem ' },
    { value: 'Intercâmbio', label: 'Intercâmbio ' },
    { value: 'Tecnologia', label: 'Tecnologia e informação ' },
    { value: 'Serviços gerais', label: 'Serviços gerais' }
  ]

  return (
    <div className="py-4 flex flex-col items-start justify-center gap-6 ">
      <h2 className="text-sm font-medium ">Por favor marque a sua consulta:</h2>

      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="w-full grid gap-6 md:grid-cols-2">
          <SelectCustomLabel
            name="application_areas"
            label="Tipo de Consulta"
            // error={errors.application_areas}
            options={areasOptions}
            onOptionChange={() => null}
          />
          <SelectCustomLabel
            name="application_areas"
            label="Especialidades"
            options={areasOptions}
            onOptionChange={() => null}
          />
        </div>
        <div className="w-full grid gap-6 md:grid-cols-2">
          <SelectCustomLabel
            name="application_areas"
            label="Médico especialista"
            options={areasOptions}
            onOptionChange={() => null}
          />
        </div>
      </div>

      <div className="w-full pt-4 flex flex-row justify-between items-center border-t-[1px] border-gray-400 ">
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

export default Step1
