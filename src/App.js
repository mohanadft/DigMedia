import React from 'react'
import { PreHeader } from './Components/PreHeader'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Services } from './Components/Services'

import './Css/style.css'

export const App = () => {
	return (
		<div>
			<PreHeader />
			<Header />
			<Home />
			<About />
			<Services />
		</div>
	)
}
