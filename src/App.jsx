import React from 'react'
import Landing from './Landing/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './Books/Books';
import Websites from './Websites/Websites';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/websites' element={<Websites/>}/>
      </Routes>
    </Router>
  )
}

export default App
