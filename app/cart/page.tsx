// src/app/cart/page.tsx
"use client"

import React, { useState } from 'react'
import { Button  } from "@nextui-org/react"
import Image from 'next/image'
import { CartItem } from '../types';
import { Trash2, Plus, Minus } from 'lucide-react'

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
        "id": "1",
        "name": "Wireless Earbuds",
        "price": 59.99,
        "description": "Noise-cancelling wireless earbuds with long battery life.",
        "image": "https://source.unsplash.com/featured/?wireless,earbuds",
        "quantity": 0
      },
      {
        "id": "2",
        "name": "Bluetooth Speaker",
        "price": 79.99,
        "description": "Portable Bluetooth speaker with deep bass and waterproof design.",
        "image": "https://source.unsplash.com/featured/?bluetooth,speaker",
        "quantity": 0
      },
  ])

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">Your cart is empty.</p>
          <Button color="primary" size="lg">Continue Shopping</Button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <div className="mt-2 flex items-center">
                    <Button size="sm" isIconOnly onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                      <Minus size={16} />
                    </Button>
                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                    <Button size="sm" isIconOnly onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button color="danger" variant="light" size="sm" className="mt-2" onClick={() => removeItem(item.id)}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button color="primary" size="lg" className="w-full mt-6">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage