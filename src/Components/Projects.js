import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import projectsImages from '../data/Images'

import 'swiper/css'
export const Projects = () => {
	return (
		<section className="projects" id="projects">
			<div className="container">
				<div className="hero-text">
					<h4>Our Portfolio</h4>
					<h1>
						See Our Recent <span>Projects</span>
					</h1>
					<div className="line"></div>
				</div>
				<Swiper spaceBetween={50} slidesPerView={4} className="swiper">
					{projectsImages.map((image, i) => {
						return (
							<SwiperSlide key={i} className="slide">
								<img src={image} alt="" />
								<h3 style={{ textAlign: 'center', padding: '5px 0' }}>
									Website Builder
								</h3>
								<p
									style={{
										textAlign: 'center',
										fontSize: '15px',
										color: '#afafaf'
									}}
								>
									Marketing
								</p>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}
