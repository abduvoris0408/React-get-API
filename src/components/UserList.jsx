import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaBuilding, FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const UserList = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)

	const getUser = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				if (res?.status === 200) {
					setUsers(res?.data)
				}
			})
			.catch(error => {
				console.log(error.message)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	useEffect(() => {
		getUser()
	}, [])

	// Loading bo'lsa, ekranning o'rtasida chiqarish
	if (loading) {
		return (
			<div className='fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
				<h2 className='text-2xl font-semibold text-gray-800 dark:text-white'>
					Loading...
				</h2>
			</div>
		)
	}

	return (
		<div className='pt-25'>
			<h1 className='dark:text-white text-center pb-5 text-4xl font-mono'>
				Users
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-18'>
				{users.map(user => (
					<div key={user.id} className='flex justify-center'>
						<div className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-80'>
							<h2 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
								{user.name}
							</h2>
							<p className='text-gray-600 dark:text-gray-400'>
								@{user.username}
							</p>
							<p className='text-gray-500 dark:text-gray-300'>
								{user.email}
							</p>

							<div className='mt-4 space-y-2 text-sm'>
								<div className='flex items-center space-x-2'>
									<FaMapMarkerAlt className='text-blue-500' />
									<span className='text-gray-700 dark:text-gray-300'>
										{user.address.city},{' '}
										{user.address.street}
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<FaPhone className='text-green-500' />
									<span className='text-gray-700 dark:text-gray-300'>
										{user.phone}
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<FaGlobe className='text-purple-500' />
									<a
										href={`https://${user.website}`}
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-500 hover:underline'
									>
										{user.website}
									</a>
								</div>
								<div className='flex items-center space-x-2'>
									<FaBuilding className='text-yellow-500' />
									<span className='text-gray-700 dark:text-gray-300'>
										{user.company.name}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default UserList
