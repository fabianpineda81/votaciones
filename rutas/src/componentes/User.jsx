import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    /* aca se usa para poder recibir la varible que viene en la url  */
    const { id } = useParams();



    const [usuario, Setusuario] = useState([])


    // esta funcion indica que es lo que tiene que hacer despues de que se pinte 
    useEffect(() => {
        // si ponemso esto asi puede que pase un ciclo infinito al usar el estate 
        document.title = "Nosotros"
        const obtenerDatos = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const user = await data.json()
            Setusuario(user)


        }

        obtenerDatos()
        //para que se ejecute una sola vez simplemente tenemos los corchetes depues de la coma  
        // aca hay que pasa el id para que no se pierda 
    }, [id])



    return (
        <div>
            {
                <h1>{usuario.name}</h1>
            }
        </div>
    )
}

export default User
