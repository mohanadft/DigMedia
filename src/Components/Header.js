import React, { useRef, useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'
export const Header = () => {
	const [isClicked, setIsClicked] = useState(false)
	const links = 'Home,About,Services,Projects,Blog,Contact'.split(',')

	const linksRefs = useRef([])

	const linksAsElements = links.map((link, index) => {
		return (
			<li className="nav-item" key={index}>
				<a
					href="#a"
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

	const navbarRef = useRef()

	return (
		<header id="header">
			<div className="container">
				<img src="./Images/logo.png" alt="logo" className="logo" />
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
