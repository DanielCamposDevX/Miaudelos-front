import styled from "styled-components";
import { TextField } from "@mui/material";


export default function AddCatInputs(props) {
    return (
        <>
            <CustomInput variant="filled" type='text' label='Name' color='secondary' required value={props.cat.name} onChange={(e) => props.setCat({...props.cat,name:e.target.value})} />
            <CustomInput variant="filled" type='url' label='Imagem' color='secondary' required value={props.cat.image} onChange={(e) => props.setCat({...props.cat,image:e.target.value})} />
            <CustomInput variant="filled" type='text' label='Cor' color='secondary' required value={props.cat.color} onChange={(e) => props.setCat({...props.cat,color:e.target.value})} />
            <CustomInput variant="filled" type='text' label='Descrição' color='secondary' required value={props.cat.description} onChange={(e) => props.setCat({...props.cat,description:e.target.value})} />
        </>
    )
}


const CustomInput = styled(TextField)({
    backgroundColor: '#ffffff',
    fontFamily: 'inherit',
    width: '80%',
    height: 'auto',
    maxWidth: '300px',
    zIndex: '20'
})