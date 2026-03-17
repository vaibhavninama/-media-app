import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from './collectionCard'
import { clearCollection, removeToter, removeCollection } from '../redux/features/collectionSlice'
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Collections = () => {
  const items = useSelector((store) => store.collection.item)
  const dispatch = useDispatch()

  const clearAllCollections = () => {
    dispatch(clearCollection())
    dispatch(removeToter())
  }

  const handleRemove = (item) => {
    dispatch(removeCollection(item))
    dispatch(removeToter())
  }

  if (items.length === 0) {
    return (
      <h1 className='flex font-extrabold text-2xl mt-6 justify-center'>
        👻 No Data of Collection !
      </h1>
    )
  }

  return (
    <div className='h-auto min-h-[100vh] w-screen bg-gray-950 text-white flex flex-col'>
      <div className='flex  sm:px-10 px-2 py-2 text-sm justify-between w-full'>
        <h1 className='text-white text-xl font-bold'>Collections</h1>

        <button
          onClick={clearAllCollections}
          className='bg-red-600 mr-6 text-sm px-3 rounded py-2'
        >
          Clear All Collections
        </button>
      </div>

      <div className='mt-4 w-full min-h-[100vh] px-10 py-6 bg-gray-800'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="space-y-4"
        >
          {items.map((item, idx) => (
            <CollectionCard
              key={item.id || idx}
              item={item}
              onRemove={handleRemove}
            />
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Collections