import React,{useState,useContext,useReducer,useEffect} from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.netlify.app/api/react-useReducer-cart-project'

const AppContext = React.createContext()

const AppProvider = ({Children}) => {
    const [cart, setCart] = useState(cartItems)

  return (
  <AppContext.Provider value={{
    cart,
  }}
  >
    {Children}
    </AppContext.Provider>);
}
// make sure use
 export const useGlobalContext= ()=>{
    return useGlobalContext(AppContext)
 }

export default {AppProvider, AppProvider}
