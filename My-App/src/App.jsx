import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"
import {useContext} from "react"
import ThemeContext, { ThemeProvider } from "./Context/ThemeContext"

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]); 
  const {theme} = useContext(ThemeContext);

  function submitHandling(inputValue) {
    if(inputValue.trim() === "") {
      alert("Write something")
      return;
    }
    setTodos([...todos, inputValue])
    setInputValue("")
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className={theme == "dark"? "dark-theme":"light-theme"}>
   
    <Header/>
    <TodoList 
      inputValue={inputValue} 
      setInputValue={setInputValue} 
      submitHandling={submitHandling}  
      todos={todos}
      deleteTodo={deleteTodo}
    />
    <Footer/>
     </div>
   
  )
}

export default App
