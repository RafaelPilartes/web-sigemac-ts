import React from 'react'

// Interface para as propriedades do componente
interface AlertProps {
  type: 'info' | 'danger' | 'success' | 'warning' | 'dark'
  message: string
}

export function AlertArea({ type, message }: AlertProps) {
  let backgroundColor = ''
  let borderColor = ''
  let textColor = ''
  let iconAlert: any = ''

  // Defina as cores com base no tipo de alerta
  switch (type) {
    case 'info':
      backgroundColor = 'bg-blue-50'
      borderColor = 'border-blue-300'
      textColor = 'text-blue-800'
      iconAlert = (
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      )
      break
    case 'danger':
      backgroundColor = 'bg-red-50'
      borderColor = 'border-red-300'
      textColor = 'text-red-800'
      iconAlert = (
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      )
      break
    case 'success':
      backgroundColor = 'bg-green-50'
      borderColor = 'border-green-300'
      textColor = 'text-green-800'
      iconAlert = (
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      )
      break
    case 'warning':
      backgroundColor = 'bg-yellow-50'
      borderColor = 'border-yellow-300'
      textColor = 'text-yellow-800'
      iconAlert = (
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      )
      break
    case 'dark':
      backgroundColor = 'bg-gray-800'
      borderColor = 'border-gray-300'
      textColor = 'text-gray-300'
      iconAlert = (
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      )
      break
    default:
      break
  }

  return (
    <div
      role="alert"
      className={`flex items-center p-4 mb-4 text-sm border rounded-lg ${backgroundColor} ${borderColor} ${textColor}`}
    >
      {iconAlert}

      <span className="sr-only">Info</span>
      <div>
        {/* Exibe a mensagem */}
        {/* <span className="font-medium">
          {type.charAt(0).toUpperCase() + type.slice(1)} alert!
        </span>{' '} */}
        {message}
      </div>
    </div>
  )
}
