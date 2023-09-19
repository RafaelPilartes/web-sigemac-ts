interface CustomInputProps {
  error?: any // Erros do react-hook-form
  isDisabled?: boolean // Erros do react-hook-form
  type: string
  htmlFor: string
  label: string
  placeholder: string
  required?: boolean
}

export function CustomInput({
  error,
  isDisabled = false,
  type,
  htmlFor,
  label,
  placeholder,
  required
}: CustomInputProps) {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor={htmlFor}
          className="block mb-2 text-sm font-medium text-dark"
        >
          {label}
        </label>
        <input
          type={type}
          id={htmlFor}
          disabled={isDisabled}
          className={`w-full p-2.5 bg-gray-200/60 border border-gray-300/60 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block`}
          placeholder={placeholder}
          required={required}
        />

        {error && (
          <span className="errorMessage py-1 text-red-600 text-xs font-medium ">
            {error.message}
          </span>
        )}
      </div>
    </>
  )
}
