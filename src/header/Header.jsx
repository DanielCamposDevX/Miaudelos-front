import { IconButton } from '@mui/material';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../pages/assets/Logo.png'


export default function PageHeader(props) {
    return (
        <Header>
            <IconButton sx={{ color: 'purple' }} onClick={() => { props.setUser(true) }}><AccountCircleIcon sx={{ fontSize: '30px' }} /></IconButton>
            <CusImg src={Logo} />
            <IconButton onClick={() => { props.setSearch(!props.search) }} sx={{ color: 'purple' }}><SearchIcon sx={{ fontSize: '30px' }} /></IconButton>
        </Header>
    )
}


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