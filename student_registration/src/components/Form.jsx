export default function Form(props) {
    return (
        <section className="form">
            <h1>Student Registration Form</h1>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input id="name"  name="name" type="text" placeholder="Enter your first name" onChange={props.handleChange}
                 value={props.data.name}/>
                <br />
                <label htmlFor="Age"> Age : </label>
                <input id="Age" name="age" type="number" placeholder="Enter your Age" onChange={props.handleChange}
                 value={props.data.age}/>
                <br />
                <label htmlFor="email">E-mail : </label>
                <input id="email" name="email" type="email" placeholder="Enter your E-mail" onChange={props.handleChange}
                 value={props.data.email}/>
                <br />
                <label htmlFor="phone">Ph. Number : </label>
                <input id="phone" name="phone" type="tel" placeholder="Enter your phone number" onChange={props.handleChange}
                 value={props.data.phone}/>
                <br />
                <label htmlFor="course">Course : </label>
                <select id="course" name="course" onChange={props.handleChange} value={props.data.course}>
                    <option value="">Select a course</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                </select>
                <br />
                <button type="submit" onClick={props.ShowMessage}>Register</button>
            </form>
        </section>
    )
}
