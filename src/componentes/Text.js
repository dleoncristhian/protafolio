import React from 'react';

const Text = props => {
    const {saludo} = props;
    
    return (
        <div>
            <h1>{saludo}</h1>
        </div>
    );
};

export default Text;