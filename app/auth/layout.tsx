import React from 'react'

const AuthLayout = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  return (
    <div className="h-full flex items-center justify-center bg-radial-[at_50%_75%] from-sky-300 via-blue-400 to-indigo-600 to-90%">
      {children}
    </div>
  )
}

export default AuthLayout;