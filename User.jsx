import axios from 'axios'
import React, { useEffect, useState } from 'react'
import designe from "./homecrud.module.css"
import { Link } from 'react-router-dom'

const Users = () => {
let [content,setContent]=useState([])
useEffect(()=>{
  axios.get("http://localhost:3000/data")
  .then((response)=>{
    console.log(response.data);
    setContent(response.data)
  })
},[])
console.log(content);
let deleteData=(a)=>{
  axios.delete(`http://localhost:3000/data/${a}`)
  window.location.assign("/user")
}
  return (
    <section id={designe.profile} >
      {content.map((x)=>{
        return(
          <div id={designe.cards} key={x.id}>
            <h1>EMP-ID :{x.id}</h1>
            <h1>NAME :{x.name}</h1>
            <h1>COMPANY :{x.company}</h1>
            <h1>SALARY :{x.salary}</h1>
            <button><Link to={`/eu/${x.id}`}>Edit</Link></button>
            <button onClick={()=>{deleteData(x.id)}}>Delete</button>
          </div>
        )
      })}
    </section>
    
  )
}

export default Users