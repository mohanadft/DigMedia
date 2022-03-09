import React, { useLayoutEffect, useRef } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

export const ScrollToTop = () => {
	const btnRef = useRef()

	useLayoutEffect(() => {
		window.onscroll = function () {
			if (this.scrollY > 0) btnRef.current.classList.add('active')
			else btnRef.current.classList.remove('active')
		}
	})

	return (
		<button
			className="scroll-btn"
			ref={btnRef}
			onClick={() =>
				window.scroll({
					top: 0,
					behavior: 'smooth'
				})
			}
		>
			<AiOutlineArrowUp />
		</button>
	)
}
