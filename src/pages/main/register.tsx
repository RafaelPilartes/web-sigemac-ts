import Aos from 'aos'
import { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { InputFloatingLabel } from '../../components/input/InputFloatingLabel'
import { User, Mail, Lock, Phone } from 'lucide-react'
import { BaseButton } from '../../components/buttons/baseButton'
import { SelectGender } from '../../components/main/SelectGender'
import { routsNameMain } from '../../data/routsName'

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const phoneNumberValidator = z.string().regex(/^\+[1-9]\d{1,14}$/)

const registerEmployeeSchema = z.object({
  completeName: z
    .string()
    .nonempty('O seu nome é obrigatório!')
    .min(6, 'O seu nome completo tem de no mínimo 6 caracteres')
    .refine(value => value, {
      message: 'Por favor, preencha este campo'
    }),
  email: z
    .string()
    .nonempty('O email é obrigatório!')
    .email('Formato de email invalido')
    .toLowerCase()
    .trim(),
  phoneNumber: z
    .string()
    .refine(value => /^\+?[0-9]+$/g.test(value), {
      message: 'Formato de número invalido'
    })
    .refine(value => value, {
      message: 'Por favor, preencha este campo.'
    }),
  password: z
    .string()
    .nonempty('A palavra-passe é obrigatório!')
    .min(6, 'A palavra-passe tem de no mínimo 6 caracteres')
    .trim()
    .refine(value => value, {
      message: 'Por favor, preencha este campo.'
    }),
  // password: z.string().refine(value => passwordRegex.test(value), {
  //   message: 'A senha deve atender aos seguintes critérios:'
  // }),
  gender: z
    .boolean()
    .refine(value => !!value, { message: 'Por favor, selecione um género' }),
  agreeTerms: z.boolean().refine(value => value, {
    message: 'Você deve concordar com os termos e condições.'
  })
})

type registerEmployeeType = z.infer<typeof registerEmployeeSchema>

// registerEmployeeSchema.refine(
//   data => {
//     const errors: string[] = []

//     if (!/(?=.*[a-z])/.test(data.password)) {
//       errors.push('Deve conter pelo menos uma letra minúscula.')
//     }

//     if (!/(?=.*[A-Z])/.test(data.password)) {
//       errors.push('Deve conter pelo menos uma letra maiúscula.')
//     }

//     if (!/(?=.*\d)/.test(data.password)) {
//       errors.push('Deve conter pelo menos um número.')
//     }

//     if (!/(?=.*[@$!%*?&])/.test(data.password)) {
//       errors.push('Deve conter pelo menos um caractere especial.')
//     }

//     return errors.length === 0 ? true : errors
//   },
//   { message: 'Senha inválida.' }
// )

interface GenderOption {
  id: string
  label: string
}

function Register() {
  const [gender, setGender] = useState<string>('')

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<registerEmployeeType>({
    resolver: zodResolver(registerEmployeeSchema)
  })

  const handleGenderChange = (gender: string) => {
    setGender(gender)
    console.log(`Selected Gender: ${gender}`)
    // Faça algo com o valor do gênero, como atualizar o estado da sua aplicação.
  }
  const genderOptions: GenderOption[] = [
    { id: 'male', label: 'Masculino' },
    { id: 'female', label: 'Feminino' }
  ]

  async function handleRegister(dataForm: registerEmployeeType) {
    alert('sss')
    console.log(dataForm)
  }

  return (
    <>
      <div className="relative w-screen h-screen flex fle flex-row justify-center items-center gap-0 ">
        <div className="relative w-full h-full flex fle flex-row justify-center items-center gap-0 ">
          <div className="relative bg-login w-full h-full flex flex-1 flex-col justify-center items-center gap-5 bg-secondary-200 max-w-s-840:hidden "></div>

          <div className="relative w-full h-screen flex flex-1 flex-col justify-center items-center overflow-y-auto ">
            <div className="relative p-4 w-full h-full flex flex-1 flex-col justify-center items-start gap-5 max-w-lg ">
              {/* Logo */}
              <div className="max-w-[18rem] ">
                <img
                  src="/logo/logo.png"
                  alt="Logo CCI"
                  className="w-full max-w-s-xs min-w-[8rem] "
                />
              </div>

              <h1 className="text-3xl font-bold max-w-s-520:text-3xl max-w-s-900:text-4xl">
                Vamos começar!
              </h1>

              <p className="relative py-2 text-[0.85rem] text-start font-normal max-w-md max-w-s-420:text-base">
                Insira seu nome, endereço de e-mail válido e senha para
                registrar sua conta
              </p>

              <form
                onSubmit={handleSubmit(handleRegister)}
                className="relative w-full flex flex-col justify-center items-start gap-5 "
              >
                <InputFloatingLabel
                  type="text"
                  label="Nome completo"
                  name="completeName"
                  control={control}
                  error={errors.completeName}
                  id="nameId"
                  icon={User}
                />
                <InputFloatingLabel
                  type="email"
                  label="Email"
                  name="email"
                  control={control}
                  error={errors.email}
                  icon={Mail}
                  id="emailId"
                />
                <InputFloatingLabel
                  type="text"
                  label="Nº de telefone"
                  name="phoneNumber"
                  control={control}
                  id="numberId"
                  icon={Phone}
                  error={errors.phoneNumber}
                />
                <InputFloatingLabel
                  type="password"
                  label="Senha"
                  name="password"
                  control={control}
                  id="passId"
                  icon={Lock}
                  error={errors.password}
                />

                <SelectGender
                  name="gender"
                  control={control}
                  error={errors.gender}
                  options={genderOptions}
                  onGenderChange={handleGenderChange}
                />

                <div className="w-full flex flex-col justify-center items-start">
                  <div className="flex justify-start items-center">
                    <input
                      {...register('agreeTerms', { required: true })}
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-primary-200 bg-gray-100 border-gray-300 rounded focus:text-primary-200 dark:focus:text-primary-200 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ml-2 text-sm dark:text-gray-300"
                    >
                      Eu aceito o{' '}
                      <a
                        href="#"
                        className="text-primary-200 dark:text-primary-200 hover:underline"
                      >
                        termos e Condições
                      </a>
                      .
                    </label>
                  </div>
                  {errors.agreeTerms && (
                    <span className="errorMessage py-1 text-red-600 text-xs">
                      {errors.agreeTerms.message}{' '}
                    </span>
                  )}
                </div>

                <BaseButton
                  typeButton="submit"
                  title="Registrar conta"
                  styleBtn="CircleHover"
                />

                <div className="flex justify-start items-center">
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm dark:text-gray-300"
                  >
                    Já tem uma conta?{' '}
                    <a
                      href={routsNameMain.login}
                      className="text-primary-200 dark:text-primary-200 hover:underline"
                    >
                      Conecte-se agora!
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
