import React from 'react'

const Input = ({ label, name }) => {
    return (
        <div>
            <label htmlFor="name">{label}</label>
            <input id={name} name={name} type='text' />
        </div>
    )
}

export default Input