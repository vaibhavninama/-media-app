import React, { useRef ,useEffect,useState } from "react";
import { useDispatch } from 'react-redux'
import {addCollection,addToter}  from '../redux/features/collectionSlice'


const ResultCard = (props) => {
 
  const videoRef = useRef(null);
   const cardRef = useRef(null);
  
   const [invisible, setInvisible] = useState('')
    
  useEffect(() => {
    const  observer = new IntersectionObserver(
       (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            setInvisible(true)
            observer.disconnect()
          }
        })
       },{threshold:0.2}
    )
    if(cardRef.current){
      observer.observe(cardRef.current)
    }

    return ()=> observer.disconnect()
   
    
  }, [])
  
   
     
    const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };
     
    const dispatch = useDispatch()
   const adblock = function(item){
     
       dispatch(addCollection(item))
        dispatch(addToter())

   
   }
    
    
   


  return (
    <div ref={cardRef} className=' rounded  flex  relative items-center pt-5 sm:pt-0  '>
      <div href={props.url} target='_blank' className='min-w-[250px] min-h-[250px] sm:min-w-[100px] sm:min-h-[100px] '>
        {props.type === "photo" ? (

        invisible && (
          <img
            src={props.url}
            alt={props.title}
            className="w-full h-full object-cover rounded"
          />
        )

      ) : (

        invisible && (
          <video
            ref={videoRef}
            src={props.url}
            muted
            loop
            onMouseEnter={playVideo}
            onMouseLeave={pauseVideo}
            className="w-full h-full object-cover rounded"
          />
        )

      )}

      </div>
      <div className='h-[35%] w-full flex items-center justify-between gap-4 absolute bottom-0 px-2  text-white bg-gradient-to-b from-transparent to-black ' >
        <h1 className=' px-2  text-sm font-sans flex items-center justify-center  font-bold capitalize overflow-hidden h-13'>{props.title}</h1>
        <button onClick={() => { adblock(props) }} className='bg-blue-600 px-4 py-2 rounded' > Save</button>


      </div>
    </div>
  )
}

export default ResultCard