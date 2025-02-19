import axios from 'axios';
import { useEffect, useState } from 'react';

const Clothes = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const getProducts = () => {
		axios
			.get('https://api.escuelajs.co/api/v1/products')
			.then(res => {
				if (res?.status === 200) {
					setProducts(res?.data);
				}
			})
			.catch(error => {
				console.log(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getProducts();
	}, []);

	if (loading) {
		return (
			<div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
				<h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Loading...</h2>
			</div>
		);
	}

	return (
		<div className="pt-25">
			<h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white pb-8">
				Products
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
				{products.map(product => (
					<div key={product.id} className="flex justify-center">
						<div className="bg-gradient-to-r from-green-500 to-blue-600 text-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 w-80">
							<img
								src={product.images[0]}
								alt={product.title}
								className="w-full h-40 object-cover rounded-lg mb-4"
							/>
							<h2 className="text-lg font-semibold mb-2">
								{product.title}
							</h2>
							<p className="text-sm opacity-80">${product.price}</p>
							<button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
								Buy Now
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Clothes;
