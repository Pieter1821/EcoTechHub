import React from 'react';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartItem({ id, name, price, quantity }: CartItemProps) {
    return (
      <div>
        <div key={id}>{name} - ${price} x {quantity}</div>
      </div>
    );
  }
