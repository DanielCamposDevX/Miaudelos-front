import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'


export default function Login() {
    
    const navigate = useNavigate();

    function handleClick(){
        navigate('/home')

    }

    return (
        <Page>
            <Fade>
                <CusImg src={Logo} />
                <Container>
                    <Search placeholder='email' />
                    <Search placeholder='senha' />
                </Container>
                    <Sbutton onClick={handleClick}>Entrar</Sbutton>
            </Fade>
        </Page>
    );
}

const Fade = styled.div`
    width:100%;
    height:100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.13209033613445376) 0%, rgba(0,0,0,0.13209033613445376) 100%);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    font-family: 'Lexend Deca', sans-serif;
`
const Page = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    font-family: 'Lexend Deca', sans-serif;
    background-image: url('https://i.pinimg.com/564x/51/48/9d/51489d4a8d7bd9eefd33d9056a767455.jpg');
`

const CusImg = styled.img`
    height: 20vh;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0px 4px 24px 0px #383d3499;
    padding-top:5px;
    padding-bottom:5px;
    background-color:white;
`

const Search = styled.input`
    padding-left: 5%;
    width: 59%;
    height: 35px;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.15);
    box-shadow: 0px 4px 24px 0px #78B1591F;
    margin-bottom: 20px;
`

const Sbutton = styled.button`
    width: 30%;
    height: 35px;
    border-radius: 12px;
    border:none;
    color:white;
    background-color: #222520;
    font-weight: 700;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 20px;
`

const Container = styled.div`
    flex-direction:column;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`