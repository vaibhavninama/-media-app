
import Axios from "axios";


const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
const pexelsApiKey = import.meta.env.VITE_PEXELS_API_KEY ;



 export async function fetchPhotos(query,page=1,perPage=15){
 let  result =  await Axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page:perPage},
    headers:{
        Authorization: `Client-ID ${unsplashApiKey}`
    }
  })

 return result.data.results.map((item) => ({  
    id: item.id,
    title: item.alt_description,
    url: item.urls.small,
    type: 'photo',
    thumbnailUrl: item.urls.thumb,
  }))
   
}
export async function fetchVideos(query,page=1,perPage=15) {
    
   let result = await Axios.get('https://api.pexels.com/v1/videos/search',{
    params:{query,page,per_page: perPage },
    headers:{
        Authorization: pexelsApiKey
    }
   })
  
return result.data.videos.map((item) => ({  
    id: item.id,
    title: item.title || 'video',
    url: item.video_files[0].link,  
    thumbnailUrl: item.image,
    type: 'video',
    
  }))

   
}