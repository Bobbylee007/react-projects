import React from 'react'
import { AppProvider } from '../14-cart/context'
import Cart from './Cart'

const Setup = () => {
  return (
    <AppProvider>
        <Cart />
    </AppProvider>
  )
}

export default Setup
