import React from 'react'
import { PreHeader } from './Components/PreHeader'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Services } from './Components/Services'
import { Grow } from './Components/Grow'
import { ScrollToTop } from './Components/ScrollToTop'
import { Projects } from './Components/Projects'

import './Css/style.css'

export const App = () => {
	return (
		<div>
			<PreHeader />
			<Header />
			<Home />
			<About />
			<Services />
			<Grow />
			<ScrollToTop />
			<Projects />
		</div>
	)
}
