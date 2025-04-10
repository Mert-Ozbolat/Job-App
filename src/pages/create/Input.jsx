import React from 'react'

const Input = ({ label, name, handleChange }) => {
    return (
        <div>
            <label htmlFor="name">{label}</label>
            <input id={name} name={name} type='text' onChange={handleChange()} />
        </div>
    )
}

export default Input