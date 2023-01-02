import React from "react"
import { BrowserRouter , Routes, Route} from "react-router-dom"

import Main from "./component/Main"
import CreateUsers from "./CreateUser"
import Users from "./User"
import EditUser from "./EditUser"
import HomeCrud from "./HomeCrud"


const App = () => {
    return (
        <div>
        <BrowserRouter>
        <HomeCrud/>
            <Routes>
                <Route path="/" element={<CreateUsers/>}/> 
                 <Route path="/user" element={<Users/>}/>
                 {/* <Route path="/eu/:index" element={<EditUser/>}/> */}
                 <Route path="/get" element={<Main/>}/>
            </Routes>
        </BrowserRouter>

    </div>
    )
}
export default App

    



