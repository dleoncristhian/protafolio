import React from 'react';

class Button extends React.Component {
    state = { contador: 0 }
    //setState -> para cambiar el valor de la variable
    incrementar = () => (
        this.setState({ contador: this.state.contador +1 })
    );

    render(){
        const { contador } = this.state;

        return (
            <div>
                <h2>Clase compartida: {contador}</h2>
                <button onClick={this.incrementar}>
                    numero: {contador}
                </button>
            </div>
        )
    }
};

export default Button;