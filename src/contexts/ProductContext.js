import { createContext } from "react";
const ProductContext = createContext({
    products: {},

    addItem: () => {}
})

export default ProductContext;
