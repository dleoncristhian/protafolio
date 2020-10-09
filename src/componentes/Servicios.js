import React from 'react';
import Servicio from './Servicio.js'

function Servicios () {

    const detalle = [
        {
            titulo : "Web Desing",
            descrip : "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            enlace : "#",
            nomEnlace : "Leer mas"

        },
        {
            titulo : "Search Engine Optimization",
            descrip : "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            enlace : "#",
            nomEnlace : "Leer mas"

        },
        {
            titulo : "Video Editing",
            descrip : "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            enlace : "#",
            nomEnlace : "Leer mas"

        }
    ]

    return (
        <section className="site-section pb-0"  id="section-services">
		<div className="container">

			<div className="row mb-4">
				<div className="col-md-12">
					<div className="section-heading text-center">
                        
						<h2>My <strong>Services</strong></h2>
					</div>
				</div>
			</div>
			<div className="row">

                {
                    detalle.map((value) => {
                        return <Servicio titulo={value.titulo}
                            descrip={value.descrip}
                            enlace={value.enlace}
                            nomEnlace={value.nomEnlace}
                        />
                    }) 
                }

			</div>
		</div>
	</section>
    )

}

export default Servicios;