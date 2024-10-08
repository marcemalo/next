'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts()
            setProducts(fetchedProducts)
            setLoading(false)
        }

        loadProducts()
    }, [])

    if (loading) return <h2 className="text-center text-xl font-bold">Loading...</h2>

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <Image src={product.image} alt={product.title} width={200} height={300} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                            <p className="text-gray-500 mb-4">{product.description.slice(0, 60)}...</p>
                            <p className="text-sm text-gray-400">Category: {product.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
