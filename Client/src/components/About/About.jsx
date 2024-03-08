import style from "./About.module.css";

const About = () =>{
    return(
        <div className={style.aboutContainer}>
            <div className={style.textoContainer}>
                <h2>Mi nombre es Jose Rojas soy de Lima, Peru</h2>
                <h2>Me gusta viajar y conocer nuevos lugares, personas y costumbres</h2>
                <h2>Con muchas ganas de aprender este mundo de la programación</h2>

            </div>    
            <div className={style.fotoContainer}>
                <img className={style.foto} src="/fotoperfil.jpg"/>
            </div>
        
        </div>

    )
}

export default About;