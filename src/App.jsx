import React from 'react'
import {BrowserRouter , Routes,Route } from 'react-router-dom'
import Frame from './Pages/Frame'
import Landing from './Pages/Landing'
import DashBoard from './Pages/DashBoard'
import StudentLogin from './Pages/StudentLogin'
import TeacherSignup from './Pages/TeacherSignup'
import TeacherLogin from './Pages/TeacherLogin'
import DashBoard_Main from './Pages/DashBoard_Main'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element= {<Frame/>} />
          <Route path='/frame' element={<Frame/>}/>
          <Route path='/landing' element ={<Landing/>}/>
          <Route path='/dashboard' element ={<DashBoard/>}/>
          <Route path='/teachersignup' element={<TeacherSignup/>}/>
          <Route path='/teacherlogin' element={<TeacherLogin/>}/>
          <Route path='/studentlogin' element={<StudentLogin/>}/>
          <Route path='/dashboardmain' element={<DashBoard_Main/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
