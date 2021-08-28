//imr para que que salga automaticamente 

import React, { Fragment } from 'react';
// sfc para porner eso 

const Jsx = () => {
    const temperatura = 20 ; 
    return (
        <Fragment>
        <h2>hola soy un componente </h2>
        <h2>hace {temperatura<20 ?' frio':' calor'}</h2>
        </Fragment>
      );
}
 
export default Jsx;