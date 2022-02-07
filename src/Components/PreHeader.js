import React, { useState, useLayoutEffect } from 'react'
import { FaFacebookF, FaBehance, FaTwitter, FaDribbble } from 'react-icons/fa'
import { MdEmail, MdDarkMode, MdLightMode } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { root } from '../index'

export const PreHeader = () => {
	const [darkTheme, setDarkTheme] = useState(
		false || JSON.parse(localStorage.getItem('dark'))
	)

	useLayoutEffect(() => {
		localStorage.setItem('dark', JSON.stringify(darkTheme))
		if (JSON.parse(localStorage.getItem('dark')))
			root.classList.add('dark-mode')
		else root.classList.remove('dark-mode')
	}, [darkTheme])

	return (
		<div className="pre-header">
			<div className="container">
				<div className="info">
					<a href="mailto:mohanadfteha@gmail.com" className="email">
						<MdEmail /> mohanadfteha@gmail.com
					</a>
					<a href="tel:0597837283" className="tel">
						<BsTelephoneFill />
						059-783-7283
					</a>
				</div>
				<div className="social-media-links">
					<ul className="social-list">
						<li className="social-item">
							<a href="#a">
								<FaFacebookF />
							</a>
						</li>
						<li className="social-item">
							<a href="#a">
								<FaBehance />
							</a>
						</li>
						<li className="social-item">
							<a href="#a">
								<FaTwitter />
							</a>
						</li>
						<li className="social-item">
							<a href="#a">
								<FaDribbble />
							</a>
						</li>
						<li>
							{' '}
							<button
								className="toggle"
								onClick={() => setDarkTheme(!darkTheme)}
							>
								{darkTheme ? <MdLightMode /> : <MdDarkMode />}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
