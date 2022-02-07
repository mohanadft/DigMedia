import React from 'react'
import { Header } from './Components/Header'
import { PreHeader } from './Components/PreHeader'
import { FirstSection } from './Components/FirstSection'
import './Css/style.css'

export const App = () => {
	return (
		<div>
			<PreHeader />
			<Header />
			<FirstSection />
		</div>
	)
}
