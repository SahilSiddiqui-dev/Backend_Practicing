export default function Display(props) {
    return (
        <>
        <h2>Registered Students:</h2>
            { props.submittedData.length === 0 ? 
            <p>No Student data is available</p>: 
            <table border="1" style={{width: "100%", marginTop:"20px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {props.submittedData.map((record,index) => {
                        return (
                        <tr key={index}>
                            <td> {record.name} </td>
                            <td>{record.age}</td>
                            <td>{record.email}</td>
                            <td>{record.phone}</td>
                            <td>{record.course}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            }
        </>
    )
}