import React, { ReactNode } from 'react'

type Props = {
    heading: string,
    headingAction?: ReactNode,
    children: ReactNode,
}

const AdminContainer = ({ heading, headingAction, children }: Props) => {
  return (
    <div className="w-full space-y-8">
        <header className="flex justify-between items-center space-x-8">
            <h2 className="text-[1.25rem] leading-[1.85] text-gray-800 font-medium dark:text-white">{heading}</h2>
            {headingAction && (
                <>
                    {headingAction}
                </>
            )}
        </header>

        <section>
            {children}
        </section>
    </div>
  )
}

export default AdminContainer