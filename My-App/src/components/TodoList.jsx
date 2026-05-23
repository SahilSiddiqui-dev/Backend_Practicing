import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext";
export default function TodoList(props) {
    const {theme} = useContext(ThemeContext);
    return (
        <main>
            <div className={theme == "dark"? "dark-theme":"light-theme"} >
                <input 
                type="text" value={props.inputValue} onChange={(e) => 
                props.setInputValue(e.target.value)} placeholder="Add a todo..."/>
                <button onClick={() => props.submitHandling(props.inputValue)}>Submit</button>
            </div>
            <section>
                <ul>
                    {props.todos.map((todo, index) => (
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={() => props.deleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
        
    )
}