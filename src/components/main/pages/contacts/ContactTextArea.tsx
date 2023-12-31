import React from 'react'

interface ContactTextAreaProps {
  rows: number
  placeholder: string
  name: string
  defaultValue?: string
}

const ContactTextArea: React.FC<ContactTextAreaProps> = ({
  rows,
  placeholder,
  name,
  defaultValue
}) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={rows}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  )
}

export default ContactTextArea
