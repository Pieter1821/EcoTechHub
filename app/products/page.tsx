import React from 'react'
import { products } from '@/app/data/products'
import ProductCard from '@/app/components/ProductCard'



const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage