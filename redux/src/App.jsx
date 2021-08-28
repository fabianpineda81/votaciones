

import Pokemon from './componentes/Pokemon';
import {Provider} from 'react-redux'
// aca hay que importar el generate estore de la store js
import generateStore from './redux/store'
function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
        <Pokemon/>
    </Provider>
  );
}

export default App;
