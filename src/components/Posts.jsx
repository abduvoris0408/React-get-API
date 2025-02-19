import axios from 'axios'
import { useEffect, useState } from 'react'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)

	const getPosts = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				if (res?.status === 200) {
					setPosts(res?.data)
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
		getPosts()
	}, [])

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
				Posts
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-18'>
				{posts.map(post => (
					<div key={post.id} className='flex justify-center'>
						<div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 w-80'>
							<h2 className='text-lg font-semibold mb-2'>
								{post.title}
							</h2>
							<p className='text-sm opacity-80'>{post.body}</p>
							<button className='mt-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition'>
								Read More
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Posts
