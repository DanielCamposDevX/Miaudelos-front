import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useEffect, useState } from "react";



export default function CatBreeds(props) {

    const [breed, setBreed] = useState([]);

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

    function handleClick(props,id) {
        props.setLoading(true)
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        if(id == -1){
            const promise = axios.get(`${import.meta.env.VITE_URL}/cats`, config)
            promise.then((res) => { 
            props.setCatData(res.data); 
            props.setLoading(false); })
            promise.catch((err) => { alert(err) });
            return 0
        }
        const promise = axios.get(`${import.meta.env.VITE_URL}/breed/${id}`, config);
        promise.then((res) => { props.setCatData(res.data); props.setLoading(false)})
        promise.catch((res) => { alert(res) })
    }

    return (
        <>
                    <LoadingButton loading={props.loading} sx={{ marginRight: '10px', fontSize: '90%', fontWeight: '700', lineHeight: '15px', minWidth: '150px', height: '35px', textTransform: 'none' }} disableElevation onClick={() => {handleClick(props,-1)}} variant="contained" color="secondary">Todos</LoadingButton>
            {
                breed.map((breed) => (
                    <LoadingButton loading={props.loading} sx={{ marginRight: '10px', fontSize: '90%', fontWeight: '700', lineHeight: '15px', minWidth: '150px', height: '35px', textTransform: 'none' }} disableElevation onClick={() => {handleClick(props,breed.id)}} key={breed.id} variant="contained" color="secondary">{breed.name}</LoadingButton>
                ))
            }
        </>
    )


}