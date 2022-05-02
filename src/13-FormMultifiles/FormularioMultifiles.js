import React, { useState } from 'react'
import './formMulti.scss'

export const FormularioMultifiles = () => {

    const [register, setRegister] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    });

    const [file, setFile] = useState();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setRegister({ ...register, [name]: value })
    };

    const handleFiles = (e) => {
    
        console.log(e.target.files);
        setFile(e.target.files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormData = new FormData();


        if (file) {

            for (const elem of file) {
                newFormData.append("file", elem)
            }

        }

        newFormData.append("register", JSON.stringify(register));

        // manda newFormData


    };
    return (
        <div className='formContainer'>
            <h1> FormularioMultifiles </h1>
            <hr />
            <form className='form' encType='multipart/form'>


                <label>name</label>
                <input
                    type='text'
                    placeholder='inserta nombre'
                    autoComplete='off'
                    name='name'
                    value={register.name}
                    onChange={handleChange}

                />

                <label>surname</label>
                <input
                    type='text'
                    placeholder='inserta apellido'
                    autoComplete='off'
                    name='surname'
                    value={register.surname}
                    onChange={handleChange}

                />

                <label>email</label>
                <input
                    type='text'
                    placeholder='inserta email'
                    autoComplete='off'
                    name='email'
                    value={register.email}
                    onChange={handleChange}

                />

                <label>password</label>
                <input
                    type='password'
                    placeholder='inserta password'
                    autoComplete='off'
                    name='password'
                    value={register.password}
                    onChange={handleChange}

                />

                <label>archivo</label>
                <input
                    type='file'
                    placeholder='inserta imagen'
                    autoComplete='off'
                    name='file'
                    onChange={handleFiles}
                    multiple

                />

                <button type='submit'
                    onClick={handleSubmit}> Guardar</button>



            </form>
        </div>
    )
}
