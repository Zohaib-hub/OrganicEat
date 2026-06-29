import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Try to load cart from local storage on mount
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem('organic_eat_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error parsing cart from storage:', error);
      return [];
    }
  });

  // Save to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('organic_eat_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      if (existingItemIndex >= 0) {
        // Update quantity if item already in cart
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += item.quantity;
        return newItems;
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) => 
      prevItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartTotalItems = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartTotalAmount,
      cartTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
