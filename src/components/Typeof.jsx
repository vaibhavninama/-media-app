import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'
const Typeof = () => {
    const buttons =['photos','videos']
   let activeTab = useSelector((state)=>{
        return state.search.activeTab
    })
    const dispatch = useDispatch()
  return (
    <div className='flex justify-center gap-10 items-center w-full pt-4 px-24 '>
    {buttons.map((item,idx)=>{
        return <button key={idx} className={ ` ${item === activeTab? 'bg-blue-500' : 'bg-green-500'} px-10 py-2`} onClick={()=>{ dispatch(setActiveTab(item)) }} > {item} </button>
      })}
    </div>
  )
}

export default Typeof