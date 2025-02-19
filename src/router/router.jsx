import { useRoutes } from 'react-router-dom'
import Clothes from '../components/Clothes'
import Posts from '../components/Posts'
import UserList from '../components/UserList'

const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <UserList />,
		},
		{
			path: '/posts',
			element: <Posts />,
		},
		{
			path: '/clothes',
			element: <Clothes />,
		},
	])
}

export default Router
