// import React from 'react'

import MainContext from "./components/MainContext";
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className=" flex h-screen">
      <Sidebar/>
      <div className=" w-full ">
        <Routes>
          <Route path={'/'} element={<MainContext/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
