import { useState,useEffect } from "react";
import { getGif } from "../helpers/GetGift";


export const useFetchGifs = ({ category }) => {
    const [images, setImages] = useState( [] );
    const [isLonding, setIsLonding] = useState( true )
    const getImages = async() => {
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLonding( false );
    }
    
    useEffect( () => {
        getImages();
    },[ ] );


     return {
        images,
        isLonding
     }
}
