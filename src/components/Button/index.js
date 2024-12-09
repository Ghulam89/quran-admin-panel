import React from 'react'

const  Button = ({
    type,
    label,
    disabled,
    className,
    IconLeft,
    onClick
}) => {
  return (
    <button onClick={onClick} type={type} className={` bg-[#19173E] px-5 py-2.5 text-center flex gap-3  justify-center   rounded-lg  font-medium ${className}`} disabled={disabled}> {IconLeft} {label}</button>
  )
}

export default Button