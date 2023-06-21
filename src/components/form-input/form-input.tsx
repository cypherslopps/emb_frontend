import React from 'react';

type InputRestProps = {
  value: string | number,
  type: "text" | "password" | "email",
  name: string,
  placeholder?: string
};

type Props = {
    label?: string,
    labelSign?: Boolean,
    otherInputProps: InputRestProps,
    onChange: (arg: any) => void,
    onBlur: (arg: any) => void,
    classname?: string,
    variant: "dark" | "transparent" | "white",
    error?: string
}

const FormInput = ({ label, labelSign, error, classname, onChange, onBlur, variant, ...otherInputProps }: Props) => {
  let inputStyleVariants: string = "";

  if(variant === "dark")
    inputStyleVariants = "border-gray-900/70 focus:border-primary-800 focus:ring-primary-400";
  else if(variant === "transparent")
    inputStyleVariants = "shadow-none border-none focus:ring-transparent dark:bg-transparent dark:text-gray-700 dark:placeholder-gray-600/80";
  else if(variant === "white")
    inputStyleVariants = "bg-white border-gray-200/50 shadow-none dark:border-gray-400/30 focus:border-primary-600 focus:ring-primary-400"
  else
    inputStyleVariants = "border-gray-300 dark:border-gray-500/40 shadow-sm shadow-gray-100/20 focus:border-primary-800 focus:ring-primary-400";

  const inputStyles: string = `form-input font-noto_sans text-inherit text-[1.02rem] mds:text-[1.05rem] sm:text-base ${classname} w-full transition duration-75 py-3 sm:py-2.5 px-5 sm:px-4 focus:ring-1 focus:ring-inset bg-transparent dark:bg-dark-shade-100 border rounded-md dark:shadow-transparent disabled:cursor-not-allowed disabled-pointer-events-none text-gray-700 dark:text-gray-300 disabled:opacity-90 placeholder-gray-600/80 dark:placeholder-gray-100/80 placeholder:text-base sm:placeholder:text-[.85rem] placeholder:font-noto_sans outline-none ${error ? "border-red-400 dark:border-red-400/80 focus:ring-red-400 focus:border-red-500" : inputStyleVariants}`;

  return (
    <div className='form-group relative flex flex-col gap-y-3 sm:gap-y-2' role="group">
        {label && <label className={`font-noto_sans ${error ? "text-red-600" : variant === "dark" ? "text-gray-900" : "text-gray-900/80"} dark:text-gray-300 text-[.95rem] mds:text-[1.03rem] sm:text-[.83rem] leading-4 pointer-events-none`} htmlFor='input'>
          {label}
          {labelSign && (
            <sup className="font-medium text-red-500 ml-1 text-[.64rem] sm:text-[.8rem]">*</sup>
          )}
        </label>}
        {otherInputProps.type === "textarea" ? (
          <textarea 
            {...otherInputProps} 
            id={`textarea-${otherInputProps.name}`}
            onChange={onChange}
            onBlur={onBlur}
            required
            className={`${inputStyles} h-[25vh] py-4`}
          />
        ) : (
          <input 
              {...otherInputProps}
              id={`input-${otherInputProps.name}`}
              className={inputStyles}
              onChange={onChange}
              onBlur={onBlur}
              autoComplete="false"
              required
          />
        )} 
        {error && <p className="text-[1.02rem] sm:text-sm text-red-600 dark:text-red-400 -mt-1 font-light">{error}</p>}
    </div>
  )
}

export default FormInput;