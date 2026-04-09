import { useState } from 'react'
import ProductCart from './components/productCart.jsx'
import './App.css'

function App() {
  const [cart, setCart] = useState(0)
  const product=[
    {
      id:1,
      name:"Laptop",
      price:5000,
      image:"https://imgs.search.brave.com/ue0uvRtmfGHgOL6-6qv3ALcemZqzSDinivA50PspXI0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjkxMzE3MjY2OTIt/MWFjY2QwYzUzY2Uw/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE4zeDhiV0ZqWW05/dmEzeGxibnd3Zkh3/d2ZIeDhNQT09"

    },
    {
      id:2,
      name:"Mobile",
      price:2000,
      image:"https://imgs.search.brave.com/mogxnLNv8cy3dCJ33lXPF3_QIMWNcD6tK9T87fo4zrI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzI1LzgyLzY2/LzM2MF9GXzIyNTgy/NjY1N19Fa2I1cnlp/ZXNtYW1RNDhwemZL/OVRoZHBYaml2QmZD/Ri5qcGc"

    },
    {
      id:3,
      name:"Charger",
      price:1000,
      image:"https://imgs.search.brave.com/CD9oi24qGOs8NrG03K5EB4sKC3zmll29xTkCWHVaCJc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tb2Jp/bGUtcGhvbmUtY2hh/cmdlci0xODkyMDQ1/My5qcGc"
    }

  ]

  function addToCart(product){
    setCart([...cart,product])
  }
  function removeFromCart(index){
    const updatecart=cart.filter((_,i)=>i!=index);
    setCart(updatecart);
  }
  const totalAmount = cart.reduce((total, index) => (total + index.price, 0))
  return (
    <div>
        <Headers cartCount= {cart.length}/>
        <ProductCart/>
        <ProductList/>
        <Cart />
    </div>
  )
}

export default App