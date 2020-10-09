import React, {useState, useEffect} from 'react';

const Bloque = () => {
    const [nombre, setNombre] = useState('Cristhian');

    useEffect(() =>
        setNombre(
            'Laureano'
        )
    )

    return (
        <div>{nombre}</div>
    )
}

export default Bloque;