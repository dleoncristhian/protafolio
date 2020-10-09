import React from 'react';

function Ficha(props) {

    return (
        <div className="resume-item mb-4">
						<span className="date">
							<span className="icon-calendar">
								</span>{props.lapso}</span>
						<h3>{props.titulo}</h3>
						<p>{props.parrafo}</p>
						<span className="school">{props.empresa}</span>
					</div>
    );
}

export default Ficha;