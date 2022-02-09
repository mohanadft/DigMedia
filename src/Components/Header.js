import React, { useRef, useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'

export const Header = () => {
	const [isClicked, setIsClicked] = useState(false)
	const links = 'Home,About,Services,Projects,Blog,Contact'.split(',')

	const linksRefs = useRef([])
	const navbarRef = useRef()

	const linksAsElements = links.map((link, index) => {
		return (
			<li className="nav-item" key={index}>
				<a
					href={`#${link.toLowerCase()}`}
					data-sec={link.toLowerCase()}
					className={`nav-link ${index === 0 ? `active` : ``}`}
					ref={e => (linksRefs.current[index] = e)}
					onClick={e => {
						linksRefs.current.forEach(linkElement =>
							linkElement.classList.remove('active')
						)
						e.target.classList.toggle('active')
					}}
				>
					{link}
				</a>
			</li>
		)
	})

	return (
		<header id="header">
			<div className="container">
				<img
					src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/logo-v1.png"
					alt="logo"
					className="logo"
				/>
				<button
					className="menu"
					onClick={() => {
						setIsClicked(!isClicked)
						navbarRef.current.classList.toggle('active')
					}}
				>
					{isClicked ? <CgClose /> : <CgMenuRight />}
				</button>
				<nav className="navbar" ref={navbarRef}>
					<ul className="nav-list">{linksAsElements}</ul>
					<a href="#a" className="free-qoute">
						Free Qoute
					</a>
				</nav>
			</div>
		</header>
	)
}
