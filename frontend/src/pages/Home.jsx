import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
function Home() {
  const [data, setData] = useState([])
  const content = useRef('')
  const { email } = JSON.parse(localStorage.getItem('todo-user'))
  const setTodo = async (e) => {
    e.preventDefault()
    setData([...data, {
      todo: content.current.value,
      email
    }])
    try {
        await axios.post('http://localhost:5000/todo/create', {
        todo: content.current.value,
        email
      })
      content.current.value=''
    } catch (error) {
      console.log(error);
    }
  }
  const deleteTodo=async(todo)=>{
    const filterTodos=data.filter(iten=>iten.todo!==todo)
    setData(filterTodos)
    try {
      await axios.post('http://localhost:5000/todo/delete', {
        todo,email
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const fetchFromDb=async()=>{
      const res=await axios.post('http://localhost:5000/todo/get',{email})
      setData(res.data)
    }
    fetchFromDb()
  }, [])

  return (
    <div>
      <form onSubmit={setTodo} className='flex justify-center py-5 gap-2 w-full'>
        <input type="text" ref={content} name="todo" className='border-nonoe outline-none text-black py-0.5 px-2 text-base font-semibold mx-1 w-64' />
        <button type='submit' className='bg-blue-500 py-1 px-5 text-base rounded-sm'>Send</button>
      </form>
      <div className='flex flex-col gap-1 my-2 items-center w-full'>
        {data?.map((item,index) =>
          <div className='w-3/4 bg-teal-600 text-lg font-bold flex items-center justify-between py-1 px-2 rounded-sm my-2' key={index}>
            <p>{item.todo}</p>
            <div className='gap-2 flex'>
            <AiFillDelete size={20} cursor={'pointer'} onClick={()=>deleteTodo(item.todo)}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Home