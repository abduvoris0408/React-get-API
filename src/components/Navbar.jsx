import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSearch, FiSun, FiUser, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isDark, setIsDark] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			setIsDark(true)
			document.documentElement.classList.add('dark')
		}
	}, [])

	const toggleTheme = () => {
		const newTheme = !isDark
		setIsDark(newTheme)

		if (newTheme) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}

	const navItems = [
		{ id: 1, name: 'Users', path: '/' },
		{ id: 2, name: 'Posts', path: 'posts' },
		{ id: 3, name: 'Clothes', path: 'clothes' },
	]

	return (
		<nav
			className={`fixed w-full z-50 transition-all border border-b-gray-500 duration-300 ${
				isScrolled
					? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80'
					: 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					<div className='flex-shrink-0 flex items-center'>
						<img
							className='h-10 w-auto rounded-full shadow-md hover:shadow-lg transition-all duration-300'
							src='https://img.freepik.com/premium-vector/me-monogram-logo-design-letter-text-name-symbol-monochrome-logotype-alphabet-character-simple-logo_955145-2634.jpg'
							alt='Logo'
						/>
					</div>

					<div className='hidden md:block'>
						<div className='ml-10 flex items-center space-x-8 gap-5'>
							{navItems.map(item => (
								<Link
									to={item.path}
									key={item.id}
									className='relative text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-body transition-colors duration-200 py-2 after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all hover:after:w-full '
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					<div className='hidden md:flex items-center space-x-6'>
						<button className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-all duration-200'>
							<FiSearch className='h-5 w-5' />
						</button>
						<button
							onClick={toggleTheme}
							className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-all duration-200'
						>
							{isDark ? (
								<FiSun className='h-5 w-5' />
							) : (
								<FiMoon className='h-5 w-5' />
							)}
						</button>
						<button className='flex items-center space-x-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-900 px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200'>
							<FiUser className='h-5 w-5' />
							<span>Sign In</span>
						</button>
					</div>

					<div className='md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-all duration-200'
						>
							{isOpen ? (
								<FiX className='h-6 w-6' />
							) : (
								<FiMenu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
