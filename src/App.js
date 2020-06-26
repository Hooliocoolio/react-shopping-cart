import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
		console.log(setCart)
		window.localStorage.setItem( setCart, "myValue"); 
	};

	const removeItem = (item) => {
		let reStock = cart.filter(value => {
			return value !== item
		})

		setCart(reStock)
	};
 

	return (
			
		<div className="App">
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, setCart, removeItem }}>
			<Navigation  />

			{/* Routes */}
		
			<Route exact path="/" component={Products} />

			<Route path="/cart" component={ShoppingCart} />
				 
	 
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

if (typeof(Storage) !== "undefined") {
	// Code for localStorage/sessionStorage.
	console.log("does work")
  } else {
	// Sorry! No Web Storage support..
	console.log("does not work")
  }

export default App;