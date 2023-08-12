import styled from 'styled-components';
import Logo from '../assets/Logo.png'
import CatBoxes from "../components/catBoxes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CatBreeds from '../components/catBreeds';
import { CircularProgress } from '@mui/material';



export default function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };

    }, [])

    return (
        <Page>
            <Header>
                <IconButton sx={{ color: 'purple' }}><AccountCircleIcon sx={{ fontSize: '30px' }} /></IconButton>
                <CusImg src={Logo} />
                <IconButton sx={{ color: 'purple' }}><SearchIcon sx={{ fontSize: '30px' }} /></IconButton>
            </Header>
            <Breeds>
                <CatBreeds />
            </Breeds>
            <Container>
                {
                    CatBoxes &&
                    <CatBoxes />
                }
                {
                    !CatBoxes &&
                    <CircularProgress size={80} color="warning" />
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
`

const Breeds = styled.div`
    display: flex;
    width: 80%;
    height: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow-x:scroll;
    overflow-y: clip;
    ::-webkit-scrollbar {
    display: none;
    }
`