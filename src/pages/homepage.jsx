import styled from 'styled-components';
import Logo from '../assets/Logo.png'
import CatBoxes from "../components/catBoxes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CatBreeds from '../components/catBreeds';
import { CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import axios from 'axios';



export default function Home() {

    const navigate = useNavigate();
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);


    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.get(`${import.meta.env.VITE_URL}/cats`, config)
        promise.then((res) => {
            setCatData(res.data);
            setLoading(false);
        })
        promise.catch((err) => { alert(err) });
    }, [])


    return (
        <Page>
            <Header>
                <IconButton sx={{ color: 'purple' }} onClick={() => { setUser(true) }}><AccountCircleIcon sx={{ fontSize: '30px' }} /></IconButton>
                <CusImg src={Logo} />
                <IconButton sx={{ color: 'purple' }}><SearchIcon sx={{ fontSize: '30px' }} /></IconButton>
            </Header>
            {user &&
                <Box onClick={() => { setUser(false) }}>
                    <UserContainer>
                        <Line onClick={() => { navigate('/')} }>Bem Vindo X<AccountCircleIcon /></Line>
                        <Line>Adicionar Novo Gato <AddIcon /></Line>
                        <Line>Minhas Informações <ContactEmergencyIcon /></Line>
                        <Line>Logout <LogoutIcon /></Line>
                    </UserContainer>
                </Box>
            }
            <Breeds>
                <CatBreeds setCatData={setCatData} setLoading={setLoading} loading={loading} />
            </Breeds>
            <Container>
                {
                    !loading &&
                    <CatBoxes catData={catData} />
                }
                {
                    loading &&
                    <CircularProgress size={80} color="inherit" />
                }
            </Container>
        </Page>
    )
}



const Page = styled.div`
    margin-top: 10vh;
    width: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Lexend Deca', sans-serif;
    background-color:#f3f1f1;
    position: relative;
    
`;

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

const Search = styled(TextField)({
    backgroundColor: '#ffffffe4',
    fontFamily: 'inherit',
    borderRadius: '12px'
})

const CusImg = styled.img`
    height: 14vh;
`

const Container = styled.div`
    flex-wrap: wrap;
    width: 90%;
    max-width: 1000px;
    min-height: 70vh;
    display:flex;  
    padding-top: 30px;
    align-items: center;
    justify-content: center;
    background-image: url('https://i.pinimg.com/564x/5d/1a/8c/5d1a8c25ed26554708c3f633509e4c91.jpg');
    border-radius: 12px;
    border: 1px solid black;
    @media (min-width: 660px) {
        padding-left: 30px;
    }
    @media (min-width: 1400px) {
        margin-top: 30px;
    }
`

const Breeds = styled.div`
    display: flex;
    width: 90%;
    height: 42px;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow-x:scroll;
    overflow-y: clip;
    ::-webkit-scrollbar {
    height: 5px;
    border: none;

    }

    ::-webkit-scrollbar-track {
    border-radius: 10px;
    border: none;

    }



    ::-webkit-scrollbar-thumb {
    background: #a8a8a8; 
    border: none;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: yellow; 
    border: none;
}
    @media (min-width: 1400px) {
        flex-direction: column;
        align-items: space-between;
        justify-content: space-between;
        height: 800px;
        width:  200px;  
        overflow-y: scroll;
        position: absolute;
        left: 10px;
        top: center;
    }

`

const Box = styled.div`
    position: fixed;
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    background-color: #ffffff42;
    z-index: 1100;

`

const UserContainer = styled.div`
    position: absolute;
    top: 10vh;
    left: 0px;
    background-color: #f3f1f1;
    z-index: 1101;
    width: 400px;
    height: 500px;
    border: 1px solid gray;
    border-radius: 10px;
`

const Line = styled.div`
    width:90%;
    height: 15%;
    border-bottom: 1px solid #ffe600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    padding-left: 5%;
    padding-right: 5%;
    color: purple;
`