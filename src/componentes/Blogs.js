import React from 'react';
import Blog from './Blog'

function Blogs() {

    const detalle = [
        {
            imagen : 'images/post_1.jpg',
            titulo : 'Creative Product Designer From Facebook',
            enlace : '#',
            descrip : 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha : 'Sep 8, 2020',
            comentarios : '5 comentarios'
        },
        {
            imagen : 'images/post_2.jpg',
            titulo : 'Creative Product Designer From Facebook',
            enlace : '#',
            descrip : 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha : 'Sep 8, 2020',
            comentarios : '3 comentarios'
        },
        {
            imagen : 'images/post_3.jpg',
            titulo : 'Creative Product Designer From Facebook',
            enlace : '#',
            descrip : 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
            fecha : 'Sep 8, 2020',
            comentarios : '2 comentarios'
        },
    ]

    return (
        <section className="site-section" id="section-blog">
		<div className="container">
			<div className="row">
				<div className="col-md-12 mb-5">
					<div className="section-heading text-center">
						<h2>Blog on <strong>Medium</strong></h2>
					</div>
				</div>
			</div>

			<div className="row">
				
                {
                    detalle.map((value) => {
                        return <Blog imagen={value.imagen}
                            titulo={value.titulo}
                            descrip={value.descrip}
                            enlace={value.enlace}
                            fecha={value.fecha}
                            comentarios={value.comentarios}
                            />
                    })
                }


			</div>
		</div>
	</section>
    )
}

export default Blogs;