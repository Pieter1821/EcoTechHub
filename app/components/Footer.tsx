
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-semibold">EcoTechHub</h3>
            <p className="mt-2 text-sm">Your eco-friendly tech and fashion store</p>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <ul className="flex justify-center space-x-4">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary">Products</Link></li>
              <li><Link href="/cart" className="hover:text-primary">Cart</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-right">
            <p>&copy; 2024 EcoTechHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer