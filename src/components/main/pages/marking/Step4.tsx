import React from 'react'

interface Step4Props {
  onNextStep?: () => void
  onPreviousStep?: () => void
}

const Step4: React.FC<Step4Props> = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <img
        src="https://media.tenor.com/n2Pnf0j5PlIAAAAC/mail-download.gif"
        alt="marcação da consulta"
        className="max-w-[16rem] "
      />
      <p className="text-center text-lg font-medium ">
        Marcação da consulta enviada com sucesso,
        <br />
        por favor aguarde a aprovação!
      </p>
    </div>
  )
}

export default Step4
