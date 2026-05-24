import { useState } from 'react'
import './App.css'

function App() {
 const [activeTab, setActiveTab] = useState('menu');
 const [orders, setOrders] = useState([]);


 const foodItems = [
  { id: 1, name: "Burger", price: 5.99 },
  { id: 2, name: "Pizza", price: 8.99 },
  { id: 3, name: "Pasta", price: 7.50 },
  { id: 4, name: "Chicken Wings", price: 6.99 },
  { id: 5, name: "Salad", price: 4.50 }
];

const addToCart = (items) => {
  const existingOrder = orders.find(order => order.id === items.id);
  if (existingOrder) {
    setOrders(orders.map(order => 
      order.id === items.id ? { ...order, quantity: order.quantity + 1 } : order
    ));
  } else {
    setOrders([...orders, { ...items, quantity: 1 }]);
  }
};

const removeFromCart = (id) => {
  setOrders(orders.filter(order => order.id !== id));
};

const updateQuantity = (itemsId, newquantity) =>{
  if(newquantity < 1 || newquantity > 10) return;
  setOrders(orders.map(order => 
    order.id === itemsId ? {...order, quantity: newquantity} : order
  ));
};

  return (
    <>
      <div className="container">
        <h1>QuickBite Order Manager</h1>
        
        {/* Tab Buttons */}
        <div>
          <button onClick={() => setActiveTab('menu')}>Menu</button>
          <button onClick={() => setActiveTab('cart')}>Cart ({orders.length})</button>
        </div>

        {/* MENU TAB */}
        {activeTab === 'menu' && (
          <div>
            <h2>Menu Items</h2>
            {foodItems.map(item => (
              <div key={item.id}>
                <p>{item.name} - ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        )}

        {/* CART TAB */}
        {activeTab === 'cart' && (
          <div>
            <h2>Your Cart</h2>
            {orders.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <>
                {orders.map(order => (
                  <div key={order.id}>
                    <p>{order.name} - ${order.price}</p>
                    <p>Quantity: 
                      <button onClick={() => updateQuantity(order.id, order.quantity - 1)}>-</button>
                      {order.quantity}
                      <button onClick={() => updateQuantity(order.id, order.quantity + 1)}>+</button>
                    </p>
                    <p>Total: ${(order.price * order.quantity).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(order.id)}>Remove</button>
                  </div>
                ))}
                <h3>Grand Total: ${orders.reduce((sum, order) => sum + (order.price * order.quantity), 0).toFixed(2)}</h3>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default App
