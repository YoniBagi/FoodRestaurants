import yelp from "../api/yelp";
import {useState} from "react";

export default () => {
    const [photos, setPhotos] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const getSingleItem = async (itemId) => {
        try{
            const response = await yelp.get(`/${itemId}`)
            setPhotos(response.data.photos)
        }catch (err){
            setErrorMessage('something went wrong')
        }
    }

    return [getSingleItem, photos, errorMessage]
}