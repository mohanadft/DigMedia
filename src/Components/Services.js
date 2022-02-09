import { useLayoutEffect, useRef, useState } from 'react'
import services from '../data/services'
import { BsCheck } from 'react-icons/bs'

export const Services = () => {
	const [service, setService] = useState(services[0])
	const servicesIcons = [
		{
			id: 1,
			name: 'Apartments',
			srcOfImg:
				'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-01.png'
		},
		{
			id: 2,
			name: 'Food & Life',
			srcOfImg:
				'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-02.png'
		},
		{
			id: 3,
			name: 'Cars',
			srcOfImg:
				'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-03.png'
		},
		{
			id: 4,
			name: 'Shopping',
			srcOfImg:
				'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-02.png'
		},
		{
			id: 5,
			name: 'Traveling',
			srcOfImg:
				'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-01.png'
		}
	]
	const servicesInfo =
		'Optimized Template,Data Info,SEO Analysis,Data Info,SEO Analysis,Optimized Template'.split(
			','
		)

	const serviceRef = useRef([])

	return (
		<section id="services" className="services">
			<div className="container">
				<div className="hero-text">
					<h4>our services</h4>
					<h1>
						What Our Agency <span>Provides</span>
					</h1>
					<div className="line"></div>
				</div>
				<div className="services-list">
					{servicesIcons.map((service, index) => {
						return (
							<div
								className={`service ${service.id === 1 ? `active` : ``}`}
								ref={e => (serviceRef.current[index] = e)}
								key={service.id}
								onClick={() => {
									serviceRef.current.forEach(e => e.classList.remove('active'))
									serviceRef.current[index].classList.add('active')
									setService(services[service.id - 1])
								}}
							>
								<img src={service.srcOfImg} alt="" />
								<h3 className="service-name">{service.name}</h3>
							</div>
						)
					})}
				</div>
				<div className="service-content">
					<div className="left">
						<h1>{service.title}</h1>
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
						<img src={service.srcOfImg} alt="" />
					</div>
				</div>
			</div>
		</section>
	)
}
