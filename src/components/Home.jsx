import Nav from '../components/Nav'
import Typeof from '../components/Typeof'
import { useSelector } from 'react-redux'
import { lazy ,Suspense} from 'react'

const Result = lazy(()=>import('./Result'))

  
const Home = () => {
   const {  query } = useSelector((store) => store.search)
   
  return (
    <div>
    <Nav />
    {!query ?( <h1 className='mt-8 px-5 py-3 text-2xl text-amber-200 font-stretch-semi-condensed' > search Something...</h1> ): <>
          <Typeof />
          <Suspense fallback={
            <h2>Loading...</h2>
          }>
           <Result /> 
          </Suspense>
          
        </>}
    </div>
  )
}

export default Home