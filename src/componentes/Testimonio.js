import React from 'react';
import Comentario from './Comentario.js';

function Testimonio (){
    const comentario = [
        {
            foto: 'images/person_1.jpg',
            autor: 'Cristhian de Leon.',
            parrafo: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            enalce: '1',
            empresa: 'empresa 1'
        },
        {
            foto: 'images/person_2.jpg',
            autor: 'Cristhian de Leon.',
            parrafo: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            enalce: '2',
            empresa: 'empresa 2'
        },
        {
            foto: 'images/person_3.jpg',
            autor: 'Cristhian de Leon.',
            parrafo: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            enalce: '3',
            empresa: 'empresa 3'
        },
        {
            foto: 'images/person_4.jpg',
            autor: 'Cristhian de Leon.',
            parrafo: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            enalce: '4',
            empresa: 'empresa 4'
        }
    ]
    return (
        <section className="site-section">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md-12">
					<div className="section-heading text-center">
						<h2>Client <strong>Testimonial</strong></h2>
					</div>
				</div>
			</div>
			<div className="row">
                {
                    comentario.map((value) => {
                        return  <Comentario foto={value.foto}
                        parrafo={value.parrafo}
                        autor={value.autor}
                        enlace={value.enlace}
                        empresa={value.empresa} />
                    })
                }
                    
			</div>
		</div>
	</section>
    )
}

export default Testimonio;