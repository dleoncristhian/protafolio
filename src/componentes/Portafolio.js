import React, { useState, useEffect } from 'react';
import Card from '../componentes/Card.js'

//function Portafolio (){
const Portafolio = () => {	

	const[data,setData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:3001/portafoliodb')
		.then(Response => Response.json())
		.then(data => setData(data))
	}, [])



	const datos = [
		{
			title: 'TITULO 1',
			subtitle: 'Subtitulo 1',
			image: 'images/p1.jpg'
		},
		{
			title: 'TITULO 2',
			subtitle: 'Subtitulo 12',
			image: 'images/p2.jpg'
		},
		{
			title: 'TITULO 3',
			subtitle: 'Subtitulo 3',
			image: 'images/p3.jpg'
		},
		{
			title: 'TITULO 4',
			subtitle: 'Subtitulo 4',
			image: 'images/p4.jpg'
		},
		{
			title: 'TITULO 5',
			subtitle: 'Subtitulo 5',
			image: 'images/p5.jpg'
		},
		{
			title: 'TITULO 6',
			subtitle: 'Subtitulo 6',
			image: 'images/p6.jpg'
		}
	]

    return (
        <div>
            <section className="site-section" id="section-portfolio">
		<div className="container">
			<div className="row">
				<div className="section-heading text-center col-md-12">
					<h2>Featured <strong>Portfolio</strong></h2>
				</div>
			</div>
			<div className="filters">
				<ul>
					<li className="active" data-filter="*">All</li>
					<li data-filter=".packaging">Packaging</li>
					<li data-filter=".mockup">Mockup</li>
					<li data-filter=".typography">Typography</li>
					<li data-filter=".photography">Photography</li>
				</ul>
			</div>

			<div className="filters-content">
			<div class="row grid">
				

				{data.portafolio ?
						data.portafolio.map(value => (
							<Card title={value.title} subtitle={value.subtitle} image={value.image} />	
						)) 
					: <div>En mantenimiento...</div>}
				
            </div>
			</div>
			
		</div>
	</section>



        </div>

    );

}

export default Portafolio;