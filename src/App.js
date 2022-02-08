import React from 'react'
import { PreHeader } from './Components/PreHeader'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { About } from './Components/About'

import './Css/style.css'

export const App = () => {
	return (
		<div>
			<PreHeader />
			<Header />
			<Home />
			<About />
		</div>
	)
}
