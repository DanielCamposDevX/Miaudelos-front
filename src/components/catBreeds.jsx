import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";



export default function CatBreeds(props) {

    const [breed, setBreed] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const promise = axios.get(`${import.meta.env.VITE_URL}/breed/-1`, config);
        promise.then((res) => { setBreed(res.data) })
        promise.catch((res) => { alert(res) })

    }, [])

    return (
        <>
            {
                breed.map((breed) => (
                    <Button sx={{marginRight: '10px', fontSize: '75%', minWidth: '100px'}} size='large' key={breed.id} variant="contained" color="secondary">{breed.name}</Button>
                ))
            }
        </>
    )


}