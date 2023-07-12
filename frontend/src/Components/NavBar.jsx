import { useNavigate } from "react-router-dom"
function NavBar() {
  const user=JSON.parse(localStorage.getItem('todo-user'))
    const navigate=useNavigate()
    const navigator=(link)=>{
        navigate(link)
    }
    const logout=()=>{
      localStorage.removeItem('todo-user')
      navigate('/auth')
    }
  return (
    <nav className="flex justify-between items-center py-1 px-2 bg-green-500 text-white">
        <h1 className="text-xl font-bold">Todo</h1>
        <ul className="flex gap-1">
            <li className="mx-2 text-lg font-semibold cursor-pointer" onClick={()=>navigator('/')}>Home</li>
            {!user&&<li className="mx-2 text-base font-semibold cursor-pointer" onClick={()=>navigator('/auth')}>Login</li>}
            {!user&&<li className="mx-2 text-base font-semibold cursor-pointer" onClick={()=>navigator('/register')}>SignUp</li>}
            {user&& <button className="bg-red-600 py-0.5 rounded-md px-3  cursor-pointer" onClick={logout}>Logout</button>}
        </ul>
    </nav>
  )
}

export default NavBar