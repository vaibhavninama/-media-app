import Axios from "axios";

 export async function fetchPhotos(query='cat',page=1,perPage=15){
 let  result =  await Axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page:perPage},
    headers:{
        Authorization: `Client-ID ${unsplashApiKey}`
    }
  })

     console.log(result)
   
}