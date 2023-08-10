import styled from 'styled-components';
import Logo from '../assets/Logo.png'
import CatBoxes from "../components/catBoxes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from '@mui/material';


export default function Home() {

    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){ navigate('/')};

    },[])

    return (
        <Page>
            <CusImg src={Logo} />
            <Header>
                <Search variant="outlined" color='secondary'placeholder="Nome do Miaudelo" />
            </Header>
            <Container>
                {
                    <CatBoxes  />
                }
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
    justify-content: space-around;
    font-family: 'Lexend Deca', sans-serif;
    background-image: url('https://i.pinimg.com/564x/5d/1a/8c/5d1a8c25ed26554708c3f633509e4c91.jpg');
    background-size: cover;
    background-position: center;
`;

const Header = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    height: 20vh;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;

`

const Search = styled(TextField)({
    backgroundColor: '#ffffffe4',
    fontFamily: 'inherit',
    borderRadius: '12px'
})

const CusImg = styled.img`
    margin-top: 20px;
    height: 20vh;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0px 4px 24px 0px #383d3499;
    padding-top:5px;
    padding-bottom:5px;
    background-color:white;
    @media (max-width: 500px) {
        height: 15vh; 
    }
`

const Container = styled.div`
    flex-wrap: wrap;
    width: 90%;
    max-width: 1000px;
    display:flex;  
    padding-top: 30px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff4b;
    border-radius: 12px;
    border: 1px solid black;
    @media (min-width: 660px) {
        padding-left: 30px;
    }
`

