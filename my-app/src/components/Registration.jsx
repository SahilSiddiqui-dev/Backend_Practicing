export default function Registration(){
    return(
        <>
        <h2>Registration Page</h2>
        <div>
        <form action="onSubmit">
            <label>Username : </label>
            <input type="text" placeholder="Enter your name"/>
            <br/>
            <br />
            <label >Age : </label>
            <input type="number" placeholder="Enter your age" />
            <br/>
            <br />
            <label>Email : </label>
            <input type="email" placeholder="Email ID" />
            <br />
            <br />
            <label>Password : </label>
            <input type="password" placeholder="Enter your password" />
            <br />
            <br />
            <button type="Submit">Submit</button>


        </form>
        </div>
        </>
    )}