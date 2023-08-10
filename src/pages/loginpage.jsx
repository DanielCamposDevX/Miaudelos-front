import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import axios from 'axios'
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, CircularProgress } from '@mui/material';


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
                alert(error)
            })
    }

    

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%', height: '100vh' }}>
            <Page>
                <Fade>
                    <CusImg src={Logo} />
                    <Container>
                        <Search variant="filled" type='email' label='Email' color='secondary' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Search variant="filled" type='password' label='Senha' color='secondary' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Container>
                    <Container>
                        <Sbutton variant="contained"   loading={loading} style={{ backgroundColor: 'purple',fontWeight: '700',  fontFamily: 'Lexend Deca',textTransform: 'none'}} type='submit'>Entrar</Sbutton>
                        <Sbutton variant="contained"  loading={loading} style={{ backgroundColor: 'orange', marginTop: '20px',fontWeight: '700',  fontFamily: 'Lexend Deca',textTransform: 'none'}} onClick={() => { navigate('/cadastro') }}>Cadastre-se</Sbutton>
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
    @media (max-width: 500px) {
        height: 15vh; 
    }
`

const Search = styled(TextField)({
    backgroundColor: '#ffffffe4',
    fontFamily: 'inherit'
})

const Sbutton = styled(LoadingButton)({
    fontWeight: '700', 
    fontFamily: 'Lexend Deca',
    textTransform: 'none'
})

const Container = styled.div`
    flex-direction:column;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`