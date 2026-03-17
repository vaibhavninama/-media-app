const CollectionCard = ({ item, onRemove }) => {
  return (
    <div className='rounded flex relative items-center overflow-hidden bg-gray-900'>
      <div className='w-full h-full'>
        {item.type === 'photo' ? (
          <img
            src={item.url}
            alt={item.title}
            className='w-full h-auto object-cover rounded'
          />
        ) : (
          <video
            src={item.url}
            controls
            className='w-full h-auto object-cover rounded'
          />
        )}
      </div>

      <div className='h-[35%] w-full flex items-center justify-between gap-4 absolute bottom-0 px-2 text-white bg-gradient-to-b from-transparent to-black'>
        <h1 className='px-2 text-sm font-sans font-bold capitalize overflow-hidden'>
          {item.title}
        </h1>

        <button
          onClick={() => onRemove(item)}
          className='bg-red-600 px-4 py-2 rounded'
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CollectionCard