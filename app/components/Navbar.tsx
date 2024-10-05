
import Link from 'next/link'
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react"
import { FaShoppingCart } from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">EcoTechHub</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" className="hover:text-primary">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/products" className="hover:text-primary">Products</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/cart" color="primary" variant="flat">
            <FaShoppingCart className="mr-2" />
            Cart
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
}

export default Navbar