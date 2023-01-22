import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm';
import styles from './FormUser.module.css'

const FormUser = () => {
    let initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [data, setData] = useState(initialState);

    // const [msgError, setMsgError] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    // });

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