import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Name from '../assets/LogoName.png'
import axios from 'axios'
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(event) {
        setLoading(true);
        event.preventDefault();
        const promise = axios.post(`${import.meta.env.VITE_URL}/login`, { email, password })
            .then((res) => {
                localStorage.setItem('token', res.data)
                setLoading(false);
                navigate('/home')
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
                alert(error.response.data);
            })
    }



    return (
        <form onSubmit={handleSubmit} style={{ width: '100%', height: '100vh' }}>
            <Page>
                <Container >
                    <CusImg src={Name} />
                    <Search variant="filled" type='email' label='Email' color='secondary' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Search variant="filled" type='password' label='Senha' color='secondary' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Container style={{ background: 'transparent', height: 'auto', border: 'none' }}>
                        <Sbutton variant="contained" loading={loading} style={{ fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none', backgroundColor:'#d919ff' }} type='submit'>Entrar</Sbutton>
                        <Sbutton variant="contained" style={{ backgroundColor: 'orange', fontWeight: '700', marginTop: '20px', fontFamily: 'Lexend Deca', textTransform: 'none' }} onClick={() => { navigate('/cadastro') }}>Cadastre-se</Sbutton>
                    </Container>
                </Container>
            </Page>
        </form>
    );
}


const Page = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    font-family: 'Lexend Deca', sans-serif;
    background-image: url('https://img.freepik.com/fotos-gratis/silhuetas-de-colinas-e-postes-de-luz-sob-um-ceu-nublado-durante-um-lindo-por-do-sol_181624-28611.jpg?w=740&t=st=1691761304~exp=1691761904~hmac=a3f89896fea70bedf01f3aef6c477890dee9b0335c16477789a186d38cdb16a3');
    background-size: cover;
`

const CusImg = styled.img`
    width: 80%;
    max-width: 300px;
    height: auto;
    border: 1px solid black;
    background-color: #ffffffdf;
    border-radius: 15px;

`

const Search = styled(TextField)({
    backgroundColor: '#ffffffe4',
    fontFamily: 'inherit',
    width: '80%',
    height: 'auto',
    maxWidth: '300px'
})

const Sbutton = styled(LoadingButton)({
    fontWeight: '700',
    fontFamily: 'Lexend Deca',
    textTransform: 'none',
})

const Container = styled.div`
    border: 1px solid black;
    border-radius: 16px;
    flex-direction:column;
    display:flex;
    height: 70vh;
    width: 90%;
    max-width: 400px;
    align-items: center;
    justify-content: space-around;
    background-image: url('https://i.pinimg.com/564x/51/48/9d/51489d4a8d7bd9eefd33d9056a767455.jpg')
`