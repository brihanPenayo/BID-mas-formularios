import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm';
import styles from './FormUser.module.css'

const FormUser = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const msgError = {
        errorUno: "Debe tener al menos 2 caracteres!",
        errorDos: "Debe tener al menos 5 caracteres!",
        errorTres: "Debe tener al menos 8 caracteres!",
        errorCuatro: "Las contrasenhas no coinciden",
    }

    const [data, setData] = useState(initialState);



    const handleSubmit = e => {
        e.preventDefault();
        setData(initialState);
    }

    const onChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    }

    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <InputForm onChange={onChange} name="firstName" type="text" labelText="Nombre: " value={data.firstName} />
            <InputForm onChange={onChange} name="lastName" type="text" labelText="Apellido: " value={data.lastName} />
            <InputForm onChange={onChange} name="email" type="email" labelText="E-mail: " value={data.email} />
            <InputForm onChange={onChange} name="password" type="password" labelText="Password: " value={data.password} />
            <InputForm onChange={onChange} name="confirmPassword" type="password" labelText="Confirmar Password: " value={data.confirmPassword} />
            <button type='submit'>Crear Usuario</button>
        </form>
    )
}

export default FormUser