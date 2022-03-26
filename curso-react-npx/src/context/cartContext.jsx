import { createContext, useState, useContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext (CartContext)

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{
        setCartList([...cartList, item])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,   //Estados Arriba
            addToCart,   //Funciones Abajo
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider