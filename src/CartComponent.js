import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from './cartSlice'

const CartComponent = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => handleRemoveItem(item)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default CartComponent
