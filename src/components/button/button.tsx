import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    role: string,
    type?: "submit" | "button",
    variant?: "fill-primary" | "border" | "transparent" | "transparent-primary" | "gray" | "accent" | "dark",
    style?: object,
    isLoading?: Boolean,
    classname?: string,
    onClick?: (prop: any) => void,
    size: "sm" 
}

const Button = ({ children, style, size, role, type = "button", variant, isLoading, classname, onClick }: Props) => {
    let variantClass: String = "";
        
    if(variant === "border") 
        variantClass = "border dark:border-white-50/10 dark:text-white hover:bg-gray-50/50 focus:bg-gray-50/50 hover:dark:bg-white/20 focus:dark:bg-white/20";
    else if(variant === "fill-primary") 
        variantClass = "text-white bg-gradient-to-bl from-primary-500 to-primary-800"; 
    else if(variant === "transparent") 
        variantClass = "text-dark-text-shade-600 dark:text-white"
    else if(variant === "transparent-primary")
        variantClass = "text-primary-900 hover:bg-gray-300";
    else if(variant === "gray")
        variantClass = "bg-gray-50/80 text-gray-600 hover:bg-gray-100/70 border border-gray-200 dark:text-inherit";
    else if(variant === "accent")
        variantClass = "bg-red-600/70 text-white hover:bg-red-600"
    else if(variant === "dark")
        variantClass = "bg-black/90 text-white hover:bg-black";
  
    return (
        <button
            type={type}
            role={role}
            aria-roledescription={role}
            aria-label={role}
            className={`py-1 font-light ${size === "sm" ? "px-4": "px-7"} ${classname ? classname : ""} ${variantClass} transition-colors duration-200 flex items-center justify-center gap-1 min-h-[2.3rem] rounded-lg hover:cursor-pointer focus:cursor-pointer text-[.906rem]`}
            style={style}
            onClick={onClick}
        >
            {isLoading && (
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="animate-spin w-5 h-5 mr-1 -ml-2 rtl:ml-1 rtl:-mr-2"
                >
                    <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path>
                    <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor"></path>
                </svg>
            )}
            {children}
        </button>
    )
}

export default Button;