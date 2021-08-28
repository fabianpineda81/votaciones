import React from 'react'
// esta importacion es necesaria para usar redux 
import {useDispatch,useSelector} from 'react-redux'
 // aca importamos la accion que esta en el Ducks que 
 import {obtenerPokemonesAccion,siguientesPokemonesAccion} from '../redux/pokeDucks'
const Pokemon = () => {
    // aca usuamos el dispatch
    const dispatch = useDispatch();
    // con esto acedemos a toda el store si queremos aceder a solo los pokemones se hace estore.pokemones 
    const pokemones = useSelector(store=>store.pokemones.array);
    console.log(pokemones)


   
    
    return (
        <div>
            lista de pokemones
            {/* las acciones se tienen que llamar desde el dispatch y se le pasa la accion por parametro con los parentesis ojo con eso 
                hay que recordar que para poder pasar una funcion con parametros hay que pasarlo por funcion flecha 
                a la accion de le puede pasar un parametro y recibirlo en el duck
            */}
            <button onClick={()=>dispatch(obtenerPokemonesAccion())}>Get pokemon</button>
                {/* se le puede pasar un parametro a la accion */}
            <button onClick={()=>dispatch(siguientesPokemonesAccion(20))}>Siguente pokemon</button>
          {   <ul>
                {
                    pokemones.map((item)=>{
                        return <li> {item.name}</li>
                    })
                }
            </ul>  }
        </div>
    )
}

export default Pokemon
