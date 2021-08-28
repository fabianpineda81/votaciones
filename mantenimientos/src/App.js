import React from 'react'
 import Header from './components/Header'; 
 import { BrowserRouter as Router, Route } from 'react-router-dom'
 import './css/general.css'
import Configuracion from './components/Configuracion';
import Configuracion_grupo_pieza from './components/configuracion/grupo_piezas/Configuracion_grupo_pieza';
import Configuracion_piezas from './components/configuracion/peizas/Configuracion_piezas';
import Configuracion_mantenimientos_obligatorios from './components/configuracion/mantenimientos_obligatorios_preventivos/Configuracion_mantenimientos_obligatorios';
import Reportes from './components/configuracion/reportes/Reportes';
import Ingresar_reporte from './components/configuracion/reportes/Ingresar_reporte';
import Configuracion_Pcs from './components/configuracion/Pcs/Configuracion_Pcs';
import ConfiguracionUsuarios from './components/configuracion/usuarios/ConfiguracionUsuarios';


function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Route path="/configuracion/usuarios" component={ConfiguracionUsuarios}/>
      <Route path="/configuracion/pcs" component={Configuracion_Pcs}/>
      <Route path="/configuracion/mantenimientos_obligatorios" component={Configuracion_mantenimientos_obligatorios}/>
      <Route path="/configuracion/grupos_piezas" component={Configuracion_grupo_pieza}  />
      <Route path="/reportes/ingresar" exact component={Ingresar_reporte}/>
      <Route path="/reportes" exact component={Reportes}/>
      <Route path="/configuracion/piezas" component={Configuracion_piezas}  />
      <Route path="/configuracion"  exact  component={Configuracion}/>
      

    </Router>
    </div>
    
  );
}

export default App;
