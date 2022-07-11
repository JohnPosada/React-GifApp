import { getGifs } from "../helpers/GetGifs"
import { useEffect, useState } from 'react'


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([ ])
    const [isloading, setIsloading] = useState(true)


    const getImages = async() => {
      const getImages = await getGifs(category)
      setImages(getImages)
      setIsloading(false)
    }
    
  
    useEffect(() => {
      getImages();
      
      }, [  ])

    return{
        images,
        isloading
    }
}
