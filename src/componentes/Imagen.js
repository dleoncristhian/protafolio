import React from 'react';


const Imagen = props => {
    const { link } = props;

    return (
        <div>  
            <img src={link} alt="prueba" width="500" height="600"></img>
        </div>
    )
};

export default Imagen;