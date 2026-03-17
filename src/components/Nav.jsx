import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const Nav = () => {

   

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    function inputHandler(e){
        e.preventDefault() 
        setText(e.target.value)
    }
  function searchHandler(){
        console.log("done!")
        dispatch(setQuery(text))
        setText('')
      
    }

  return (
    <div className='flex bg-teal-500  text-black items-center   px-10 py-2 justify-between w-full h-full  ' >
      <input type="search" value={text} onChange={(e)=>{
        inputHandler(e)
      }} className='bg-white w-[55%] md:px-10  sm:justify-center sm:gap-10  py-3  outline-none rounded' placeholder='Enter Something you went ' required />
      <button onClick={searchHandler} className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600' >Search</button>

    </div>
  )
}

export default Nav