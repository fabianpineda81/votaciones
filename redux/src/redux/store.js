// esto siempre es asi 
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// es donde importamos el poque ducks
import pokeReducer from './pokeDucks'

const rootReducer= combineReducers({
    // aca se llama a los reducer en esta caso el pokereducer
    pokemones:pokeReducer,
    
})
// aca pregunta si existe si la extencion esta en el navegador instalado si no usa el compose

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}