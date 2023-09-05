import styled from "styled-components"
import { TextField } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"

export default function SearchCat(props){

    const [search,SetSearch] = useState('')

    
    useEffect(()=>{
        if(search === ''){
            props.setCatData(props.allCats);
        }
        else{
            const data = props.catData
            const filteredObjects = data.filter(obj => obj.name.toLowerCase().startsWith(search.toLowerCase()));
            props.setCatData(filteredObjects)
        }
    },[search])

    return(
        <Search variant="filled" type='text' label='Search' color='secondary' required value={search} onChange={(e) => SetSearch(e.target.value)} />
    )
}


const Search = styled(TextField)({
    backgroundColor: '#ffffff',
    fontFamily: 'inherit',
    width: '80%',
    height: 'auto',
    maxWidth: '300px',
    zIndex: '20'
})
