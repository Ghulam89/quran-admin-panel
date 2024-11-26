import React from 'react'

const Input = ({
    label,
    placeholder,
    name,
    type,
    className,
    defaultValue,
    onChange,
    Icon,
    required

}) => {
    return (
        <div className=' relative'>
            <label for="first_name" className=' block mb-2 text-sm font-medium  text-gray-900'>{label}</label>
            <input  style={{ boxShadow: '0px 0px 63.44px 0px #00000012' }} required={required} onChange={onChange} defaultValue={defaultValue} placeholder={placeholder} name={name} id={name} type={type} className={`  outline-none     py-3.5  text-black  placeholder:text-primary rounded-md  ${className}`} />
            <div className=' absolute left-3 top-3'>
                <i>{Icon}</i>
            </div>
        </div>
    )
}

export default Input