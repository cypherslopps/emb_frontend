import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex items-center justify-center">
        {children}
    </div>
  )
}

export default AuthLayout