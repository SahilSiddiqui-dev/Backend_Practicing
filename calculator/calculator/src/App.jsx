import { useState } from 'react';
import Addition from './components/Addition.jsx';
function App() {
  
  const[input, setInput] = useState(0);

  function inputHandling(){
    if(input.trim == ""){
      alert("Please Input Some Value");

    }
  }

  return (
    <>
    <Additon/>
    </>
  )
}

export default App
