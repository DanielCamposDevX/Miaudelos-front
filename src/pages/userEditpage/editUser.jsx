import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageSecondHeader from "../../header/SecondHeader";


export default function EditUser() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [confpassword, setConfPass] = useState('');
    const [change, setChange] = useState(false);
    const id = localStorage.getItem('id')
    const navigate = useNavigate();


    useEffect(() => {

        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };
        const promise = axios.get(`${import.meta.env.VITE_URL}/users/${id}`)
            .then((res) => {
                setName(res.data.user.name);
                setEmail(res.data.user.email);
                setPhone(res.data.user.phone);
            })
            .catch((res) => {
                alert(res)
            });
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const data = {
            email,
            phone,
            name
        }
        console.log(data)
        console.log(config)
        const promise = axios.patch(`${import.meta.env.VITE_URL}/users/edit/${id}`, data, config)
        promise.then((res) => {
            console.log(res);
            navigate('/home');
        });
        promise.catch((res) => {
            console.log(res);
            alert(res);
        });
    }


    function handleNewPass() {
        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };
        if (password !== confpassword) {
            alert('Senhas devem ser iguais')
            return 0
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const data = {
            password
        }
        const promise = axios.patch(`${import.meta.env.VITE_URL}/users/edit/${id}/pass`, data, config)
        promise.then((res) => {
            navigate('/');
        });
        promise.catch((res) => {
            alert(res);
        });
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%', height: '100vh' }}>
            <Page>
                <PageSecondHeader />
                <Fade>
                    <Container style={{ boxShadow: '0px 4px 24px 0px #1e1c1f99' }}>
                        {!change && <>
                            <Search variant="filled" type='text' label='Name' color='secondary' required value={name} onChange={(e) => setName(e.target.value)} />
                            <Search variant="filled" type='email' label='Email' color='secondary' required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Search variant="filled" type='tel' label='Telefone' color='secondary' required value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <Sbutton type="submit" variant="contained" color="secondary">Salvar informações</Sbutton>
                            <Sbutton onClick={() => { setChange(true) }} color='secondary'> Alterar senha</Sbutton>
                        </>
                        }
                        {
                            change &&
                            <>
                                <Search variant="filled" type='password' label='Nova senha' color='secondary' required value={password} onChange={(e) => setPass(e.target.value)} />
                                <Search variant="filled" type='password' label='Confirmar nova senha' color='secondary' required value={confpassword} onChange={(e) => setConfPass(e.target.value)} />
                                <Sbutton variant="contained" onClick={() => { handleNewPass() }} color='secondary'> Alterar senha</Sbutton>
                                <Sbutton onClick={() => { setChange(false) }} color='secondary'> Voltar</Sbutton>
                            </>
                        }

                    </Container>
                </Fade>
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
    font-family: 'Lexend Deca', sans-serif;
    background-image: url('https://i.pinimg.com/564x/51/48/9d/51489d4a8d7bd9eefd33d9056a767455.jpg');
    `

const Sbutton = styled(LoadingButton)({
    fontWeight: '700',
    fontFamily: 'Lexend Deca',
    textTransform: 'none',
    zIndex: '20'
})

const Container = styled.div`
    margin-top: 5vh;
    border: 1px solid black;
    border-radius: 16px;
    flex-direction:column;
    display:flex;
    height: 80vh;
    width: 90%;
    max-width: 400px;
    align-items: center;
    justify-content: space-around;
    background-color: #f0f0f0;
    
`

const Fade = styled.div`
    width:100%;
    height:100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.082) 0%, rgba(0, 0, 0, 0.068) 100%);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    font-family: 'Lexend Deca', sans-serif;
    z-index: 1000;
`

const Search = styled(TextField)({
    backgroundColor: '#ffffff',
    fontFamily: 'inherit',
    width: '80%',
    height: 'auto',
    maxWidth: '300px',
    zIndex: '20'
})