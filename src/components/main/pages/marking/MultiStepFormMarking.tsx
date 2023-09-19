import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { CalendarDays, Clock2, Info, Check } from 'lucide-react'

const steps = [
  { component: Step1 },
  { component: Step2 },
  { component: Step3 },
  { component: Step4 }
]

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = () => {
    if (steps.length == currentStep + 1) return
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = () => {
    if (currentStep == 0) return
    setCurrentStep(currentStep - 1)
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <>
      <div className="w-full flex flex-col items-start justify-center">
        <ol className="w-full flex items-center">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`w-full flex items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 ${
                steps.length == index + 1 ? '' : 'after:border-b'
              } ${
                steps.length !== index + 1 && index < currentStep
                  ? 'after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800'
                  : ''
              } `}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 bg-${
                  index === currentStep ? 'blue' : 'gray'
                }-100 rounded-full lg:h-12 lg:w-12 dark:bg-${
                  index === currentStep ? 'blue' : 'gray'
                }-800 shrink-0`}
              >
                {index === 0 ? (
                  <CalendarDays size={20} />
                ) : index === 1 ? (
                  <Clock2 size={20} />
                ) : index === 2 ? (
                  <Info size={20} />
                ) : (
                  <Check size={20} />
                )}
              </span>
            </li>
          ))}
        </ol>

        <div className="w-full max-w-5xl">
          <CurrentStepComponent
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        </div>
      </div>
    </>
  )
}

export default MultiStepForm
