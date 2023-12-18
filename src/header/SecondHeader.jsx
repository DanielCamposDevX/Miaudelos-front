import { IconButton } from '@mui/material';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../pages/assets/Logo.png'
import { useNavigate } from 'react-router-dom';


export default function PageSecondHeader() {
    const navigate = useNavigate();
    
    return (
        <Header>
            <IconButton onClick={() => { navigate(-1) }} sx={{ color: 'purple' }} ><ArrowBackIcon sx={{ fontSize: '30px' }} /></IconButton>
            <CusImg src={Logo} />
            <IconButton sx={{ color: 'white' }}><SearchIcon sx={{ fontSize: '30px' }} /></IconButton>
        </Header>
    )
}


const Header = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    position: fixed;
    top:0px;
    left:0px;
    z-index: 2000;
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