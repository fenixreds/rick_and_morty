import { useState } from "react";
import style from "./Register.module.css"
import validate from "../Validations/validation";




const Register=({register})=>{

    const [user,setUser]=useState({
        email:"",
        password:"",
    })

    const [errors,setErrors]=useState({
        email:"",
        password:"",
    })



    const handleChange=(e)=>{
        e.preventDefault()

        setUser({
            ...user,//SPREAD OPERATOR PARA NO PERDER LA DATA ANTERIOR CUANDO CAMBIAS DE CAMPOS
            [e.target.name]:e.target.value,
        });

        setErrors(
            validate({
                ...user,
                [e.target.name]: e.target.value,
            })
        )

    }

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        register(user);
    }


    


    
    return(
        <div className={style.formContainer}>
            <div className={style.formTitle}>
                <h1>Ingrese los siguientes datos</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={style.credentials}>
                    <label>Username</label>
                    <input type="text" 
                    name="email"
                    value={user.email}
                    onChange={handleChange}/>
                    {errors.email? <span>{errors.email}</span>: null}
                </div>
                <div className={style.credentials}>
                    <label>Password</label>
                    <input type="text" 
                    name="password" 
                    value={user.password}
                    onChange={handleChange}/>
                    {errors.password? <span>{errors.password}</span>: null}
                </div>
                <button className={style.submitButton}
                >Registrarse</button>

                
            </form>

        </div>

    );
};

export default Register;