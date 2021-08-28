import axios from 'axios'

//constantes 
const dataInicial={
    array:[],
    offset:0
}


// por cada accion debe ir una 
const OBTENER_POKEMONES_EXITO='OBTENER_POKEMONES_EXITO'
const OBETENER_SIGUIETES_POKEMONES_EXITO='OBETENER_SIGUIETES_POKEMONES_EXITO'

//reducer

export default function pokeReducer(state=dataInicial,action){

    // aca en el action recibimos la respuesta la accion (obtenerPokemones Accion) y la respuesta esta en atributo payload
    //por aca accion debe ir un caso 
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state,array:action.payload}
        
        case OBETENER_SIGUIETES_POKEMONES_EXITO:
            return  {...state,array:action.payload.array,offset:action.payload.offset}

        default:
            return state;

    }
}


//acciones 

export const obtenerPokemonesAccion=()=> async (dispatch,getState )=>{
    
    // el getState regresa el estado de la tienda 
    /* console.log('getstate',getState().pokemones.offset) */

    const offset= getState().pokemones.offset
    try{
        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            // aca se manda el resultado de la operacion la cual va a hacer evaluada por la funcion pokeReducer
            // viajan como action
            type:OBTENER_POKEMONES_EXITO,
            payload:res.data.results,
            
            
        })
    }catch(error){
        console.log(error)
        

    } 

}
    //
export const siguientesPokemonesAccion=(numero)=>async(dispatch,getState)=>{
    const offset= getState().pokemones.offset+numero

        try{
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            dispatch({
                type:OBETENER_SIGUIETES_POKEMONES_EXITO,
                payload:{
                    offset:offset,
                    array:res.data.results

                }
            })
        }catch(error){
            console.log(error);
        }


}





