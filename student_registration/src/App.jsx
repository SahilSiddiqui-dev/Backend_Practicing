import { useState , useEffect } from 'react'
import Form from './components/Form.jsx'
import Display from './components/Display.jsx'
import './App.css'
function App() {

  const[data, setData] = useState({
    name :"",
    age :"",
    email:"",
    phone:"",
    course:""
  })

  const [submittedData, setSubmittedData] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem("studentData");
    if(storedData) {
      setData(JSON.parse(storedData))
    }

    const storedSubmittedData = localStorage.getItem("submittedRecords");
    if(storedSubmittedData) {
      setSubmittedData(JSON.parse(storedSubmittedData))
    }
  }, [])

  const ShowMessage = () => {
    alert("Registration successful!")
  }

  const handleChange = (e) => {

    const {name, value} = e.target
    const updatedData = {...data, [name] : value}
    setData(updatedData)
    console.log(updatedData)
    localStorage.setItem("studentData", JSON.stringify(updatedData))

  }


  function handleSubmit (e) {
    e.preventDefault();
    console.log(data);

    const newSubmittedData = [...submittedData, data]
    setSubmittedData(newSubmittedData)

    localStorage.setItem("submittedRecords", JSON.stringify(newSubmittedData))
    setData({
      name :"",
      age :"",
      email:"",
      phone:"",
      course:""
    })
    localStorage.removeItem("studentData")
  }
  return (
    <>
      <Form 
      handleSubmit={handleSubmit} 
      handleChange={handleChange} 
      data={data}
      ShowMessage={ShowMessage}
      />

      <Display submittedData={submittedData} />

      </>
  )
}

export default App
