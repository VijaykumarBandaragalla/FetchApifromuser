import React, { useState } from 'react'
import axios from 'axios'
// import style from "./homecrud.module.css"
import style from "./main.module.css"
const Main = () => {
    let isloading = false
    let API = "https://reqres.in/api/users?page=1"
    let [data, setData] = useState([])
    const fetchApiData = async(url) =>{
        let isloading = true
        axios.get(API).then((res)=>{
            console.log(res.data);
        setData(res.data.data)
        })
    }
    if(isloading){
        return(
            <h1>loading</h1>
        )
    }
    return (
       
    <div id={style.button}>
        <button onClick={fetchApiData}>get users</button>
        <div>
        {data.map((x)=>{
                return(
                    <div id={style.gu}>
                        <table className={style.table}>
                            <tr className={style.heading}>
                                <th>id</th>
                                <th>email</th>
                                <th>firstname</th>
                                <th>lastname</th>
                                <th>image</th>
                            </tr>
                            <tr className={style.main}>
                                <th> <h4 className={style.id}>{x.id}</h4></th>
                                <th><h4 className={style.email}>{x.email}</h4></th>
                                <th><h4 className={style.fn}>{x.first_name}</h4></th>
                                <th><h4 className={style.ln}>{x.last_name}</h4></th>
                                <th><img className={style.img} src={x.avatar} alt="no_image" /></th>
                            </tr>

                        </table>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default Main