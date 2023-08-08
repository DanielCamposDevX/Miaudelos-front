import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'


export default function Cadastro() {

    const navigate = useNavigate();

    function handleClick(site) {
        navigate(site);

    }

    return (
        <Page>
            <Fade>
                <CusImg src={Logo} />
                <Container>
                    <Search placeholder='Nome' />
                    <Search placeholder='CPF' />
                    <Search placeholder='Email' />
                    <Search placeholder='Senha' />
                    <Search placeholder='Confirmar senha' />
                    <Search placeholder='Telefone' />
                    <Sbutton style={{ backgroundColor: 'orange' }} onClick={() => { handleClick('/') }}>Cadastrar-se</Sbutton>
                </Container>
                    
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
    background-image: url('https://www.everwallpaper.co.uk/cdn/shop/products/cartoon-cat-wall-mural-plain.jpg?v=1640095561');
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
    width: 71%;
    height: 35px;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.15);
    box-shadow: 0px 4px 24px 0px #78B1591F;
    margin-bottom: 20px;
    box-shadow: 0px 4px 24px 0px #383d345a;
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
    box-shadow: 0px 4px 24px 0px #383d3499;
`

const Container = styled.div`
    flex-direction:column;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`