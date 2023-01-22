import React from 'react'
import styles from './InputForm.module.css'

const InputForm = (props) => {
    const { name, type, labelText, msgError, onChange, value } = props;

    return (
        <div className={styles.boxInput}>
            <input
                className={styles.inpt}
                id={labelText}
                name={name}
                type={type}
                onChange={onChange}
                value={value}
                required
                placeholder={labelText} />
            <label className={styles.lbl} htmlFor={labelText}>{labelText}</label>
            <p>{msgError}</p>
        </div>
    )
}

export default InputForm