import React from 'react';

function Comentario (props) {
    return (

        <div className="col-md-6">
            <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                    <img src={props.foto} alt="Image placeholder" className="img-fluid"/>
                </div>
                <blockquote className="block-47-quote">
                    <p>&ldquo;{props.parrafo}&rdquo;</p>
                    <cite className="block-47-quote-author">&mdash; {props.autor} <a href="{props.enlace}"> {props.empresa} </a></cite>
                </blockquote>
            </div>
        </div>
    )
}

export default Comentario;
