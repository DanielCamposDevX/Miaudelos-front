import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import { useState } from 'react';
import axios from 'axios';



export default function Cadastro() {
    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setCpass] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (password !== cpass) {
            alert('Senhas devem ser iguais');
            return 0;
        }
        const promise = axios.post(`${import.meta.env.VITE_URL}/signup`, {
            email,
            password,
            name,
            cpf,
            phone
        })
        .then((res)=>{console.log(res)})
        .catch((res)=> {console.log(res)})

    }

    return (
        <form onSubmit={handleSubmit}>
            <Page>
                <Fade>
                    <CusImg src={Logo} />
                    <Container>
                        <Search type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome' />
                        <Search type='text' value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='CPF' />
                        <Search type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <Search type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Senha' />
                        <Search type='password' value={cpass} onChange={(e) => setCpass(e.target.value)} placeholder='Confirmar senha' />
                        <Search type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Telefone' />
                        <Sbutton type='submit' style={{ backgroundColor: 'orange' }}>Cadastrar-se</Sbutton>
                        <Sbutton onClick={() => { navigate('/') }}>Já tenho cadastro</Sbutton>
                    </Container>
                </Fade>
            </Page>
        </form>
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