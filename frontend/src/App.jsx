import React from 'react'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import { Home, Login, SignUp} from './pages'
import NavBar from './Components/NavBar'
const App = () => {
  function Protect({children}) {
    const user=JSON.parse(localStorage.getItem('todo-user'))
    if(!user){
      return <Navigate to={'/register'}/>
    }else{
      return children
    }
  }
  return (
    <div className="h-screen">
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Protect><Home/></Protect>}/>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;