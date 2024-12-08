import React from 'react'

const Select = ({ label, name, options }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>

            <select name={name} id={name}>
                <option value="">Seçiniz</option>
                {
                    options.map((i) => (
                        <option key={i}>{i}</option>
                    ))
                }

            </select>


        </div>
    )
}

export default Select