import { useRef, useState } from 'react'
import services from '../data/services'
import { Service } from './Service'

export const Services = () => {
	const [filtered, setFiltered] = useState(services[0])
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

	const serviceRef = useRef([])
	const serviceContentRef = useRef()

	const removeAllActiveClasses = () =>
		serviceRef.current.forEach(e => e.classList.remove('active'))

	const addActiveClassToTarget = index =>
		serviceRef.current[index].classList.add('active')

	const servicesIconElements = servicesIcons.map((service, index) => {
		return (
			<div
				className={`service ${service.id === 1 ? `active` : ``}`}
				ref={e => (serviceRef.current[index] = e)}
				key={service.id}
				onClick={() => {
					removeAllActiveClasses()
					addActiveClassToTarget(index)
					setFiltered(services[index])
				}}
			>
				<img src={service.srcOfImg} alt="" />
				<h3 className="service-name">{service.name}</h3>
			</div>
		)
	})

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
				<div className="services-list">{servicesIconElements}</div>
				<Service
					serviceRef={serviceContentRef}
					title={filtered.title}
					srcOfImg={filtered.srcOfImg}
					key={filtered.id}
				/>
			</div>
		</section>
	)
}
