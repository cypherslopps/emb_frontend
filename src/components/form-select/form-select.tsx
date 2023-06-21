import React from 'react';
import ISelectOption from '@/interfaces/select-option';

type SelectRestProps = {
    value: string | number,
    id: string,
};

type Props = {
    label: string,
    otherSelectProps: SelectRestProps,
    onChange: (arg: any) => void,
    error?: string,
    variant: "dark",
    labelSign: boolean,
    selectDataOptions: Array<null>,
    defaultValue: string
}

const FormSelect = ({ label, error, onChange, onBlur, variant, classname, labelSign, selectDataOptions = [], defaultValue, ...otherSelectProps }: Props) => {
    return (
        <div className="form-group relative flex flex-col gap-y-3 sm:gap-y-2" role="group">
            {label && <label className={`font-noto_sans ${error ? "text-red-600" : variant === "dark" ? "text-gray-900" : "text-gray-900/80"} dark:text-gray-300 text-[.95rem] mds:text-[1.03rem] sm:text-[.83rem] leading-4 pointer-events-none`} htmlFor='input'>
              {label}
              {labelSign && (
                <sup className="font-medium text-red-500 ml-1 text-[.64rem] sm:text-[.8rem]">*</sup>
              )}
            </label>}

            <select 
                className={`form-select font-noto_sans capitalize w-full lg:text-[.98rem] mds:text-[1.04rem] sm:text-base transition duration-75 select:bg-white focus:ring-1 focus:ring-inset border rounded-md shadow-sm shadow-gray-100/40 dark:shadow-dark-shade-100 dark:text-gray-300 text-gray-700 dark:bg-gray-800 disabled:opacity-70 ${error ? "border-red-400 dark:border-red-400/80 focus:ring-red-400 focus:border-red-500" : variant === "dark" ? "border-gray-500/40 focus:border-primary-800 focus:ring-primary-400" : "border-gray-300/80 dark:border-gray-500/40 focus:border-primary-700 dark:focus:border-primary-500 focus:ring-primary-400"} bg-transparent dark:bg-dark-shade-100 placeholder-gray-600/80 dark:placeholder-gray-300 placeholder:text-sm dark:placeholder-gray-100/80 placeholder:font-noto_sans outline-none disabled:opacity-70 ${classname}`} 
                {...otherSelectProps}
                onChange={onChange}
                onBlur={onBlur}
            >
                <option value="">{defaultValue}</option>
                {selectDataOptions.length ? selectDataOptions.map(option => (
                    <option value={option} key={option}>{option}</option>
                )) : null}
            </select>

            {error && <p className="text-[1.02rem] sm:text-sm text-red-600 dark:text-red-400 -mt-1 font-light">{error}</p>}
        </div>
    )  
}

export default FormSelect;