import React from 'react';
import { Toggle, ToggleItem } from "@tremor/react";
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';  

type Props = {}

const ThemeButton = (props: Props) => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <>
            <Toggle
              color="zinc"
              defaultValue="1"
              onValueChange={(value) => console.log(value)}
            >
              <ToggleItem value="1" icon={HiSun} />
              <ToggleItem value="2" icon={HiMoon} />
            </Toggle>
            <span 
                aria-label="toggle dark mode"
                role="button"    
                className="flex justify-center items-center w-[2.3rem] h-[2.2rem] rounded-lg text-[1.5rem] transition-colors duration-75 hover:border hover:border-gray-200/50 hover:bg-gray-100/60 hover:dark:bg-dark-tint-200/95 hover:dark:border-dark-tint-200/80 hover:cursor-pointer focus:cursor-pointer"
                onClick={() => setTheme(resolvedTheme
                     === "dark" ? 'light' : 'dark')}
            >
                {resolvedTheme === "dark" ? (
                    <HiSun className="h-5 w-5 text-orange-300" />
                ) : (
                    <HiMoon className="h-5 w-5 text-slate-800" />
                )}
            </span>
        </>
    )
}

//  

export default ThemeButton;