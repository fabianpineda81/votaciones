import { Fragment } from "react";

        const Comentario = ({sujeto}) => {
            return (
                <Fragment>
                  <h1></h1>
                  <hr/>
                  <div className="media">
                      <img src={sujeto.url} className="mr-3" alt="Imagen "/>
                      <div className="media-body">
                          <h5 className="mt-0"> {sujeto.nombre} </h5>
                          {sujeto.texto}
                      </div>
                  </div>
                </Fragment>
            );
        }
   

 
export default Comentario;