export default function EventToDo() {

    function handleSubmit(e) {
        e.preventDefault();   // page reload stop

        const inputValue = e.target.task.value.trim();

        if (inputValue === "") {
            alert("Task can't be empty");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${inputValue}</span>
            <button class="deleteBtn">Delete</button>
        `;

        document.getElementById("taskList").appendChild(li);

        e.target.reset(); // clear input
    }

    function handleClick(name) {
        alert(`${name}, you pressed the button!!`);
    }

    function handleClickList(e) {
        if (e.target.classList.contains("deleteBtn")) {
            e.target.parentElement.remove();
        }
    }

    return (
        <div className="Div">

            <h1>Event Handling</h1>

            {/* <button onClick={() => handleClick("Sahil")}>
                Click Me
            </button> */}

            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Add your task here" />
                <br />
                <button type="submit">Add Task</button>
            </form>
            <br />
            <ul id="taskList" onClick={handleClickList}></ul>

        </div>
    );
}
