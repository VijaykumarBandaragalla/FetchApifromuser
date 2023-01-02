import axios from 'axios'
import React, { useState } from 'react'
import style from "./homecrud.module.css"
import { useNavigate } from 'react-router-dom'
const CreateUsers = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let Navigate = useNavigate()
  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salaryData=(e)=>{
    setSalary(e.target.value)
  }
  let companyData=(e)=>{
    setCompany(e.target.value)
  }
  let formHandle=(e)=>{
    e.preventDefault()
    let payload={name,salary,company}
    axios.post("http://localhost:3000/data",payload)
    .then(()=>{
      console.log("data has been added");
    })
    Navigate("/user")
  }
  return (
    <div id={style.mainForm}>
        <form>
            <label>id: </label>
            <input type="text" value={name} onChange={nameData}/> <br />
            <label>email: </label>
            <input type="text" value={salary} onChange={salaryData}/> <br />
            <label>firstname</label>
            <input type="text" value={company} onChange={companyData}/> <br />
            <label>name</label>
            <input type="text" value={company} onChange={companyData}/> <br />
            <button onClick={formHandle}>Submit</button>
        </form>
    </div>
  )
}
export default CreateUsers