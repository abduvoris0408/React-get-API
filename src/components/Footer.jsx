import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<footer
			className={`fixed bottom-0 w-full z-50 transition-all border border-b-gray-500 duration-300 ${
				isScrolled
					? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80'
					: 'bg-transparent'
			}`}
		>
			<div className=' py-2 border-t flex  flex-col items-center gap-2 border-gray-300 dark:border-gray-700 text-center'>
				<div className='flex space-x-4'>
					<a
						href='#'
						className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
					>
						<FaFacebook className='h-6 w-6' />
					</a>
					<a
						href='#'
						className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
					>
						<FaTwitter className='h-6 w-6' />
					</a>
					<a
						href='#'
						className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
					>
						<FaInstagram className='h-6 w-6' />
					</a>
					<a
						href='#'
						className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
					>
						<FaLinkedin className='h-6 w-6' />
					</a>
				</div>
				<p className='text-gray-600 dark:text-gray-400 text-sm'>
					© 2024 Your Company. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
