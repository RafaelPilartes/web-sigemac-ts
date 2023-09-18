import { PhoneOutgoing } from 'lucide-react'

export function AboutUs() {
  return (
    <>
      <div className="w-full">
        <div className="container flex flex-col items-center justify-center gap-8 py-32 px-16 lg:flex-row ">
          <div className="flex-1 flex items-center justify-center ">
            <img
              alt=""
              src="https://conteudo.imguol.com.br/c/entretenimento/fc/2020/09/04/negro-1599263033535_v2_450x450.jpg"
              className="w-full max-w-md rounded-xl"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="relative flex items-center justify-start gap-2 text-primary-200 ">
              <span className="text-base font-bold uppercase">
                Sobre a nossa empresa
              </span>
            </h2>

            <h1 className="text-4xl font-bold max-w-s-1030:text-3xl ">
              Garantimos sempre o melhor tratamento médico para sua saúde
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidente ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea comodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidente ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea comodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <div className="w-full flex flex-row items-center justify-start gap-4 min-w-s-1390:flex">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center gap-2">
                <PhoneOutgoing size={24} className="text-white" />
              </div>

              <div className="flex flex-col items-start justify-center">
                <span className="text">Precisa de Emergência?</span>
                <span className="text-lg font-semibold ">
                  +244 933 369 5943
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
