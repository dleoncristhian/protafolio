import React, {useState} from 'react';

function incrementar() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2>Clases de React</h2>
            <h4>{contador}</h4>
            <button onClick={() => setContador(contador+1)}>
                Click me
            </button>
        </div>
    );
}

export default incrementar;