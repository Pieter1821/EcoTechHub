import React from 'react';
import Link from 'next/link' 
import { ProductCardProps } from '../types';


export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <Link href={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}