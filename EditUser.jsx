import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import style from "./homecrud.module.css"
import { useNavigate, useParams } from 'react-router-dom'
const EditUser = () => {
    let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let navigate = useNavigate()
  let {index} = useParams()
  console.log(index);
  useEffect(()=>{
    axios.get(`http://localhost:3000/data/${index}`)
    .then((x)=>{
      setName(x.data.name)
      setSalary(x.data.salary)
      setCompany(x.data.company)
    })
  },[])
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
    axios.put(`http://localhost:3000/data/${index}`,payload)
    .then(()=>{
      console.log("data has been updated");
    })
    navigate("/user")
  }
  return (
        <div id={style.mainForm } >
        <form>
            <label>Emp Name : </label>
            <input type="text" value={name} onChange={nameData} /> <br />
            <label>Emp Salary : </label>
            <input type="text" value={salary} onChange={salaryData}/> <br />
            <label>Emp Company : </label>
            <input type="text" value={company} onChange={companyData}/> <br />
            <button onClick={formHandle}>Submit</button>
            
        </form>

    </div> 
  )
}

export default EditUser
