import { createContext } from 'react';

const CartContext = createContext({

    //aha - the object here will be comprised of the object set on the value prop of the provider component!
    cart: [],
    
    setCart: () => {}
    })
    
    export default CartContext