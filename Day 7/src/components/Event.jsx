export function EventToDo(){
        function handleClick(props){
            alert(`${props}, you pressed button`)
        }
        function handleSubmit(e){
            e.preventDefault();//it prevent PAGE TO RELOAD
            const input = e.target.value;
            const inputValue = ImageCapture.trim();
            if(inputValue===""){
                alert("task can not be empty")
                return;
            }
            const li = document.createElement("li");
            li.innerHTML = <span>${inputValue}</span>
        }
    return(
        <>
            <h1>Event handling</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="add text" />
                <input type="submit" onClick={handleClick()} />
            </form>
            <ul >
                <li></li>
            </ul>
        </>
    )
}