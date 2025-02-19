import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './router/router'
const App = () => {
	return (
		<div className='dark:bg-black bg-white'>
			<Navbar />
			<Router />
			<Footer />
		</div>
	)
}

export default App
