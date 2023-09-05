import axios from "axios";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function FormBreeds(props) {

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

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Raça</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={props.breedid} label="Age" onChange={(e) => props.setBreedId(e.target.value)}>
                    {breed.map((breed) => (
                        <MenuItem key={breed.id} value={breed.id}>{breed.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )

}


