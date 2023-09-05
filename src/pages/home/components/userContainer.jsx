import { useState,useEffect } from "react";
import { ButtonGroup,Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";


export default function UserContainer(props) {

    const navigate = useNavigate();
    const id = localStorage.getItem('id');
    const [userActive, setUserActive] = useState(false);

    useEffect(() => {
        if (props.user) {
                setUserActive(true);
        }
    }, [props.user]);

    function logOut(){
        localStorage.clear();
        navigate('/');
    }

    return (
        <Container user={userActive} >
            <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" sx={{ width: '100%', height: '100%' }}>
                <Button onClick={()=>{navigate(`/users/${id}`)}}color='secondary' sx={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '600' }}> Bem vindo(a) {props.name}! <AccountCircleIcon /></Button>
                <Button onClick={()=>{navigate('/cats/new')}} color='secondary' sx={{ width: '100%', height: '10%', display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '600' }}> Adicionar Novo Gato <AddIcon /> </Button>
                <Button onClick={()=>{navigate('/users/edit')}} color='secondary' sx={{ width: '100%', height: '10%', display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '600' }}> Editar minhas Informações <ContactEmergencyIcon /></Button>
                <Button onClick={()=>{logOut()}}color='secondary' sx={{ width: '100%', height: '10%', display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '600' }}> Logout <LogoutIcon /></Button>
            </ButtonGroup>
        </Container>
    )


}


const Container = styled.div`
    position: absolute;
    top: 10vh;
    left: 0px;
    background-color: #f3f1f1;
    z-index: 1101;
    width: 400px;
    max-width: 90%;
    border: 1px solid gray;
    border-radius: 10px;
    height: ${(props) => (props.user ? '500px' : '100px')};
    transition: height 1s ease 0s;
`