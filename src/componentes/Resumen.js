    import React from 'react';
    import Ficha from './Ficha.js'

    function Resumen (){

		const educacion = [
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EDUCACION 1',
				parrafo: 'Descipcion para educacion, en mi resumen. 1',
				empresa: 'Curso 1'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EDUCACION 2',
				parrafo: 'Descipcion para educacion, en mi resumen. 12',
				empresa: 'Universidad 2'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EDUCACION 3',
				parrafo: 'Descipcion para educacion, en mi resumen. 3',
				empresa: 'Curso 3'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EDUCACION 4',
				parrafo: 'Descipcion para educacion, en mi resumen. 4',
				empresa: 'Taller 4'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EDUCACION 5',
				parrafo: 'Descipcion para educacion, en mi resumen. 5',
				empresa: 'Curso 5'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EDUCACION 6',
				parrafo: 'Descipcion para educacion, en mi resumen. 6',
				empresa: 'Taller 6'
			}
		]

		const experiencia = [
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EXPERIENCIA 1',
				parrafo: 'Descipcion para experiencia, en mi resumen. 1',
				empresa: 'empresa 1'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EXPERIENCIA 2',
				parrafo: 'Descipcion para experiencia, en mi resumen. 12',
				empresa: 'empresa 2'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EXPERIENCIA 3',
				parrafo: 'Descipcion para experiencia, en mi resumen. 3',
				empresa: 'empresa 3'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EXPERIENCIA 4',
				parrafo: 'Descipcion para experiencia, en mi resumen. 4',
				empresa: 'empresa 4'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EXPERIENCIA 5',
				parrafo: 'Descipcion para experiencia, en mi resumen. 5',
				empresa: 'empresa 5'
			},
			{
				lapso: 'Enero 19 - Presente',
				titulo: 'EXPERIENCIA 6',
				parrafo: 'Descipcion para experiencia, en mi resumen. 6',
				empresa: 'empresa 6'
			}
		]

        return (
            <div>
            
            <section className="site-section " id="section-resume">
		<div className="container">
			<div className="row">
				<div className="col-md-12 mb-5">
					<div className="section-heading text-center">
						<h2>Mi <strong>Resumen</strong></h2>
					</div>
				</div>
				<div className="col-md-6">
					<h2 className="mb-5">Educacion</h2>

					{
						educacion.map((value) => {
							return <Ficha lapso={value.lapso}
							titulo={value.titulo}
							parrafo={value.parrafo}
							empresa={value.empresa}/>
						})	
					}
				</div>
				<div className="col-md-6">
					<h2 className="mb-5">Experiencia</h2>

					{
						experiencia.map((value) => {
							return <Ficha lapso={value.lapso}
							titulo={value.titulo}
							parrafo={value.parrafo}
							empresa={value.empresa}/>
						})	
					}

				</div>
			</div>
		</div>
	</section>

            </div>

        );

    }

    export default Resumen;