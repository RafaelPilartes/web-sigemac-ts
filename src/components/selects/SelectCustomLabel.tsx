interface OptionOption {
  value: string
  label: string
}

interface SelectCustomLabelProps {
  error?: any // Erros do react-hook-form
  isDisabled?: boolean // Erros do react-hook-form
  name: string
  label?: string
  options: OptionOption[]
  onOptionChange: (gender: string) => void
}

export function SelectCustomLabel({
  error,
  isDisabled = false,
  name,
  label,
  options,
  onOptionChange,
  ...inputProps
}: SelectCustomLabelProps) {
  return (
    <>
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-dark"
          >
            {label}
          </label>
        )}

        <select
          {...inputProps}
          id="countries"
          name={name}
          disabled={isDisabled}
          className={`p-2.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full bg-gray-200/60 border border-gray-300/60 text-gray-500 text-sm `}
        >
          <option value="">Selecione uma opção</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <span className="errorMessage py-1 text-red-600 text-xs">
            {error.message}
          </span>
        )}
      </div>
    </>
  )
}
