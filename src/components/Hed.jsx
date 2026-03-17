import {Link} from 'react-router-dom'

const Hed = () => {
  return (
    <div className=' flex  justify-between items-center px-6 h-16 bg-gray-900 sm:px-5  ' >
      <Link to='/'  >Media-Mems</Link> 
       <div className='flex  gap-4 '>  
     <Link className='text-sm px-2  sm:px-8 py-2  bg-white text-black rounded' to="/">Home</Link>
     <Link className='text-sm px-2  sm:px-8 py-2  bg-white text-black rounded' to="/collection">Collection</Link>
     
     
     </div>
    </div>
  )
}

export default Hed