import React from "react";
import '../hojas de estilo/TareaFormulario.css';

function TareaFormulario(props) {
    return(
        <form className='tarea-fomulario'>
            <input
            className= 'tarea-imput'
            type= 'text'
            placeholder= 'Escribe una Tarea'
            name= 'texto'
            />
            <button className='tarea-boton'> 
                Agregar Tarea 
            </button>
        </form>

    );
}
export default TareaFormulario;