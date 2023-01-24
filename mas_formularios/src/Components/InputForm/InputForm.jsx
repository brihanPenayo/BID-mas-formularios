import React from 'react'
import { useState } from 'react';
import styles from './InputForm.module.css'

const InputForm = (props) => {
    const { name, type, labelText, msgError, onChange, value, pattern } = props;
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true);
    }

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
                pattern={pattern}
                placeholder={labelText}
                onBlur={handleFocus}
                autoComplete="off"
                focus={focus.toString()} />
            <label className={styles.lbl} htmlFor={labelText}>{labelText}</label>
            <p className={styles.error}>{msgError}</p>
        </div>

    )
}

export default InputForm