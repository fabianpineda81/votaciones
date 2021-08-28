import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect, useHistory, useLocation
} from "react-router-dom";


const Login = ({ actualizar_login, setcrear_usuario }) => {


    const [datos, setDatos] = useState({
        correo: "",
        contra: "",
        op:"login"

    })

    const actualizar = (event) => {

        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
           
        })




    }


    const Loguear = async (event) => {


        event.preventDefault()
        setDatos({
            ...datos,op:"login"
        })
        const form = new FormData();
        form.append("datos", JSON.stringify(datos))
        console.log(form)
        



        const res = await fetch("http://localhost/votacion2/", {
            method: 'POST',
            mode: 'cors',
            body: form
        })

        const json = await res.json();


        console.log(json)
        if (json.error != "") {
            console.log(json.error);
        } else {
            console.log(json.respuesta)
            actualizar_login(json.respuesta)
        }

        
    }


    return (
        <div className="row">
            <div className="col-4 offset-4">
                <div className="card mt-5">
                    <div className="card-body bg-success">
                        <div className="card-header">
                            <h3 className="text-center">Login</h3>
                        </div>
                        <form id="login" onSubmit={Loguear}>
                            <div className="form-gruop">
                                <h5>correo</h5>
                                <input type="text" className="form-control" id="correo" name="correo" onChange={actualizar} />
                            </div>

                            <div className="form-gruop">
                                <h5>Contraseña</h5>
                                <input type="text" className="form-control" id="contra" name="contra" onChange={actualizar} />
                            </div>

                            <input type="submit" value="Login" className="btn btn-primary col-6 offset-3 mt-5" />

                        </form>
                        <input type="button" value="Crear usuario" onClick={() => { setcrear_usuario(true) }} className="btn btn-primary col-6 offset-3 mt-2" />
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Login;

