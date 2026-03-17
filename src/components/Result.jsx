import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { useDispatch, useSelector } from 'react-redux'
import SkeletonCard from './SkeletonCard'
import { lazy, useEffect } from 'react'
import Masonry from "react-masonry-css";
import {  setError, setLoading,  setResults,  } from '../redux/features/searchSlice'


const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};


const ResultCard =lazy(()=> import('./ResultCard'))

const Result = () => {
    const { activeTab, query, results, error, loading } = useSelector((store) => store.search)
    const dispatch = useDispatch()


    useEffect(() => {


        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab === 'photos') {
                    data = await fetchPhotos(query)
                }
                if (activeTab === 'videos') {
                    data = await fetchVideos(query)
                }

                dispatch(setResults(data))
            }
            catch (err) {
                dispatch(setError(err.message))
            }

           
        }
          if(!query) return  
      getData()

    }, [activeTab, query,dispatch])
 if(error) return <h1>Error: {error}</h1>
   
 if (loading) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4  mt-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <SkeletonCard />
        </div>
      ))}
    </div>
  );
}

    if (query.trim() && results.length === 0) return <h1>No Results Found</h1>
    
     
    return (
         <div className='flex flex-wrap mt-4 gap-5  overflow-hidden  justify-start' >
       <Masonry
  breakpointCols={breakpointColumnsObj}
  className="flex gap-4 mt-4"
  columnClassName="space-y-4"
>
     {results.map((item)=>{
             return  <ResultCard key={item.id} {...item} /> 
         })}
    </Masonry>     
         </div>
        
         
   
    )
}

export default Result