import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { IconButton, CircularProgress } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from './assets/Logo.png'
import { useEffect, useState } from "react";
import axios from "axios";
import CatBoxes from "./components/catBoxes";

export default function UserPage() {

    const { id } = useParams()
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };
        const promise = axios.get(`${import.meta.env.VITE_URL}/users/${id}`)
            .then((res) => {
                setInfo(res.data)
                setLoad(false)
            })
            .catch((res) => { alert(res.data) });
    }, [])

    return (
        <Page>
            <Header>
                <IconButton onClick={() => { navigate('/home') }} sx={{ color: 'purple' }} ><ArrowBackIcon sx={{ fontSize: '30px' }} /></IconButton>
                <CusImg src={Logo} />
                <IconButton sx={{ color: 'white' }}><SearchIcon sx={{ fontSize: '30px' }} /></IconButton>
            </Header>
            <Container>
                {!load &&
                    <>
                        <h1>Olá, Eu sou {info.user.name}!</h1>
                        <h2>Meus Dados:</h2>
                        <p>Telefone: {info.user.phone}</p>
                        <p>Email: {info.user.email}</p>
                        <h1>Meus Pets:</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}><CatBoxes catData={info.cats} /></div>

                    </>
                }
                { load && <CircularProgress size={80} color="inherit" />}
            </Container>
        </Page>

    )

}

const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Lexend Deca', sans-serif;
    background-image: url('https://i.pinimg.com/564x/51/48/9d/51489d4a8d7bd9eefd33d9056a767455.jpg');
`

const Header = styled.div`
font-family: 'Lexend Deca', sans-serif;
position: fixed;
top:0px;
left:0px;
z-index: 1000;
height: 10vh;
width: 92%;
padding-left:4%;
padding-right:4%;
background-color: white;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom: 1px solid gray;
`

const CusImg = styled.img`
    height: 14vh;
`

const Container = styled.div`
    margin-top: 14vh;
    flex-direction: column;
    display:flex;
    width: 80%;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    z-index:10;
    border-radius: 12px;
    border: 1px solid black;
    h1{
        color: #9e0496;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    
`