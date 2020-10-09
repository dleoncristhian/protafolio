import React from 'react';

function Servicio (props) {

    return (
        <div className="col-md-6 col-lg-4 text-center mb-5">
        <div className="site-service-item site-animate" data-animate-effect="fadeIn">
            <span className="icon">
                <span className="icon-browser2"></span>
            </span>
            <h3 className="mb-4">{props.titulo}</h3>
            <p>{props.descrip}</p>
            <p><a href={props.enlace} className="site-link">{props.nomEnlace} <i className="icon-chevron-right"></i></a></p>
        </div>
    </div>
    )

}

export default Servicio;