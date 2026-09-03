import React from 'react'
import { useGlobalContext } from './context'

const CartItem = ({id, img, title, price, amount}) => {
  const {remove,increase, decrease} = useGlobalContext()
  return (
    <div className="cart-item">
      <div className='cart-title'>
      <img src={img} className='cart-img' alt={title} />
        <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      </div>
      
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
        {/* amount */}
        <p className="amount-btn">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem

