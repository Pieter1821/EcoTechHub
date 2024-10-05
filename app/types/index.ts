export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity:number;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }

  export interface ProductCardProps {
    product: Product;
  }