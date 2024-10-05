
import Link from 'next/link'
import { Button } from "@nextui-org/react"
import { products } from './data/products'
import ProductCard from '@/app/components/ProductCard'

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 3) // Show first 3 products as featured

  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to EcoTechHub</h1>
        <p className="text-xl mb-6">Your one-stop shop for eco-friendly electronics and clothing</p>
        <Button as={Link} href="/products" color="primary" size="lg">
          Shop Now
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
        </div>
      </section>
    </div>
  )
}

export default HomePage