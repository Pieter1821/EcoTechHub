import { products } from '@/app/data/products'
import { notFound } from 'next/navigation'
import { Button, Image } from "@nextui-org/react"

interface ProductPageProps {
  params: {
    id: string
  }
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const product = products.find(p => p.id === params.id)


  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log(`Added ${product.name} to cart`)
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
        <Button color="primary" size="lg" onPress={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default ProductPage