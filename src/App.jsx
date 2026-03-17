
import { Route, Routes } from 'react-router-dom'
  import { ToastContainer,Bounce} from 'react-toastify';
import Hed from './components/Hed'
import { lazy,Suspense } from 'react';
  
const Home =lazy(()=>import('./components/Home'))
const Collection =lazy(()=>import('./components/Collections')) 

const App = () => {
 

  return (
    <div className='h-auto min-h-[100vh] w-screen bg-gray-950 text-white overflow-y-hidden' >  
     <Hed /> 
      <Suspense fallback={<div className="animate-pulse bg-gray-800 h-60 rounded"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Suspense>
       
      
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />


    </div>
  )
}

export default App