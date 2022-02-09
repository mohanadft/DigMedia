import React from 'react'

export const About = () => {
	const progress = [
		{
			id: 1,
			name: 'progress1',
			percent: '90',
			title: 'Coding',
			borderColor: '#fa65b1'
		},
		{
			id: 2,
			name: 'progress2',
			percent: '70',
			title: 'Photoshop',
			borderColor: '#726ae3'
		},
		{
			id: 3,
			name: 'progress3',
			percent: '80',
			title: 'Animation',
			borderColor: '#f58b56'
		}
	]
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="left">
					<img
						src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/about-dec.png"
						alt="about"
					/>
				</div>
				<div className="right">
					<h4>about us</h4>
					<h1>
						Who Is DigiMedia <span>Agency</span>
					</h1>
					<div className="line"></div>
					<p>
						We hope this DigiMedia template is useful for your work. You can use
						this template for any purpose. You may{' '}
						<a href="#a">contribute a little amount</a> via PayPal to{' '}
						<a href="#a"> support TemplateMo </a>in creating new templates
						regularly.
					</p>
					<div className="progress">
						{progress.map(e => {
							return (
								<div className={e.name} key={e.id}>
									<svg>
										<circle
											cx="70"
											cy="70"
											r="70"
											style={{
												strokeDashoffset: `calc(440 - (440 * ${+e.percent}) / 100`,
												stroke: e.borderColor
											}}
										></circle>
									</svg>
									<div className="text">
										<h2>{e.percent}%</h2>
										<h5>{e.title}</h5>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
