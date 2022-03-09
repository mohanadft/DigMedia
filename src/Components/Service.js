import { BsCheck } from 'react-icons/bs'

export const Service = props => {
	const servicesInfo = 'Optimized Template,Data Info,SEO Analysis,Data Info,SEO Analysis,Optimized Template'
		.split`,`

	return (
		<div className="service-content" ref={props.serviceRef}>
			<div className="left">
				<h1>{props.title}</h1>
				<p className="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do
					eiusmod deis tempor incididunt ut labore et dolore kengan darwin
					doerski token. dover lipsum lorem and the others.
				</p>
				<div className="services-info">
					{servicesInfo.map((serviceInfo, index) => {
						return (
							<p className="info" key={index + 1}>
								<BsCheck />
								{serviceInfo}
							</p>
						)
					})}
				</div>
				<p className="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do
					eiusmod deis tempor incididunt.
				</p>
			</div>
			<div className="right">
				<img src={props.srcOfImg} alt="" />
			</div>
		</div>
	)
}
