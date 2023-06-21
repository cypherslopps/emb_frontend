import React from 'react'


type Props = {
    label?: string,
    value: number | string | readonly string[] | boolean,
    name: string,
    onChange: (props: any) => void
}

const FormCheckbox = ({ label, name, value, onChange }: Props) => {
  return (
    <label className="checkbox inline-flex items-center space-x-2 rtl:space-x-reverse" htmlFor={name}>
        <input 
            type="checkbox" 
            id={name} 
            name={name}
            value={value}
            onChange={onChange}
            className="form-checkbox text-primary-600 dark:bg-gray-700 transition duration-75 rounded shadow-sm focus:border-primary-500 dark:border-gray-600 dark:checked:bg-primary-600 dark:checked:border-primary-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:opacity-70 border-gray-300 outline-none"
        />
        {label && <span className="text-sm font-light leading-4 text-gray-600">{label}</span>}
    </label>
  )
}

export default FormCheckbox