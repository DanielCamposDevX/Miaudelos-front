import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import LogoName from '../assets/LogoName.png'
import { useState } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';


export default function Cadastro() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setCpass] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
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
            .then((res) => {
                setLoading(false);
                navigate('/');
            })
            .catch((res) => {
                alert(res.response.data);
                setLoading(false);
            })

    }

    return (
        <form onSubmit={handleSubmit}>
            <Page>
                <Fade>
                    <CusImg src={LogoName} />
                    <Container>
                        <Search type='text' color='secondary' value={name} onChange={(e) => setName(e.target.value)} sx={{marginBottom: '10px'}}label='Nome' variant="standard" required/>
                        <Search type='text' color='secondary' value={cpf} onChange={(e) => setCpf(e.target.value)} sx={{marginBottom: '10px'}}label='CPF' variant="standard" required/>
                        <Search type='email' color='secondary' value={email} onChange={(e) => setEmail(e.target.value)} sx={{marginBottom: '10px'}}label='Email' variant="standard" required/>
                        <Search type='password' color='secondary' value={password} onChange={(e) => setPassword(e.target.value)} sx={{marginBottom: '10px'}}label='Senha' variant="standard" required/>
                        <Search type='password' color='secondary' value={cpass} onChange={(e) => setCpass(e.target.value)} sx={{marginBottom: '10px'}}label='Confirmar senha' variant="standard" required/>
                        <Search type='tel' color='secondary' value={phone} onChange={(e) => setPhone(e.target.value)} sx={{marginBottom: '10px'}}label='Telefone' variant="standard" required/>
                        <Sbutton variant="contained" loading={loading}  style={{ backgroundColor: 'orange', marginTop: '20px', fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none' }} type='submit'>Cadastrar</Sbutton>
                        <Sbutton variant="contained"  style={{ backgroundColor: 'purple', marginTop: '20px', fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none' }} onClick={() => { navigate('/') }}>Já tenho login</Sbutton>
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
    border: 1px solid rgb(144, 55, 196);
    box-shadow: 0px 4px 24px 0px #c858df99;
    padding-top:5px;
    padding-bottom:5px;
    background-color:#ffffff;
    @media (max-width: 500px) {
        height: 15vh; 
    }
`

const Search = styled(TextField)({

})

const Sbutton = styled(LoadingButton)({

})


const Container = styled.div`
    flex-direction:column;
    display:flex;
    width: 90%;
    max-width: 400px;
    align-items: center;
    justify-content: space-around;
    background-color:#ffffffdf;
    padding-top: 20px;
    padding-bottom:20px;
    border-radius: 15px;
    border: 1px solid black;
    @media (max-width: 500px) {
        width: 80% 
    }
`