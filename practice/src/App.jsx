import {useState} from "react"
function App() {
  const [count,setCount]=useState(0);
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")


  const[formData,setFormData]=useState({
    email:"",
    password:""
  })
  
  // const handleEmail=(event)=>{
  //   setEmail(event.target.value)
  // }
  // const handlePassword=(event)=>{
  //   setPassword(event.target.value)
  // }
  // const handleCLick=()=>{
  //   alert(`email: ${email} password: ${password} Successfully login`)
  // }
  // const handleIncrement=()=>{
  //   setCount((preCount)=>preCount+1)
  //   console.log(count)
  // }
  // const handleDecrement=()=>{
  //   setCount((preCount)=>preCount-1)
  //   console.log(count)
  // }
  const handleChange=(event)=>{
    // console.log(event.target.name)
    // console.log(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    alert(`email: ${formData.email} password: ${formData.password} Successfully login`)
  }
  return (
    <div style={{textAlign:"center"}}>
      <form onSubmit={handleSubmit}>
      <p>i am a button</p>
      <input type="text" name="email" placeholder="Type your email" onChange={handleChange} />
      <input type="password" name="password"placeholder="Enter the password" onChange={handleChange} />
      <button type="submit">Login</button>
      </form>
      {/* <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> */}


    </div>
  )
}

export default App;
