import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Name from '../assets/LogoName.png'
import axios from 'axios'
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, IconButton, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from '../assets/Logo.png'
import FormBreeds from '../components/formBreeds';



export default function NewCatPage() {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [breedid, setBreedId] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const data = {
            name,
            image,
            color,
            breedid,
            description
        }
        const promise = axios.post(`${import.meta.env.VITE_URL}/cats`, data, config)
        promise.then((res) => {
            console.log(config);
            console.log(res);
            setLoading(false);
            navigate('/home');
        });
        promise.catch((res) => {
            console.log(promise);
            alert(res);
            setLoading(false);
        });
    }


    return (

        <form onSubmit={handleSubmit} style={{ width: '100%', height: '100vh' }}>
            <Header>
                <IconButton onClick={() => { navigate('/home') }} sx={{ color: 'purple' }} ><ArrowBackIcon sx={{ fontSize: '30px' }} /></IconButton>
                <CusImg src={Logo} />
                <IconButton sx={{ color: 'white' }}><SearchIcon sx={{ fontSize: '30px' }} /></IconButton>
            </Header>
            <Page>
                <Fade>
                    <Container style={{ boxShadow: '0px 4px 24px 0px #1e1c1f99' }}>
                        <Search variant="filled" type='text' label='Name' color='secondary' required value={name} onChange={(e) => setName(e.target.value)} />
                        <Search variant="filled" type='url' label='Imagem' color='secondary' required value={image} onChange={(e) => setImage(e.target.value)} />
                        <Search variant="filled" type='text' label='Cor' color='secondary' required value={color} onChange={(e) => setColor(e.target.value)} />
                        <Search variant="filled" type='text' label='Descrição' color='secondary' required value={description} onChange={(e) => setDescription(e.target.value)} />
                        <FormBreeds breedid={breedid} setBreedId={setBreedId} />
                        <Container style={{ background: 'transparent', height: 'auto', border: 'none' }}>
                            <Sbutton variant="contained" loading={loading} style={{ fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none', backgroundColor: 'purple' }} type='submit'>Adicionar Gato</Sbutton>
                        </Container>

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

const CusImg = styled.img`
    height: 14vh;
`

const Search = styled(TextField)({
    backgroundColor: '#ffffff',
    fontFamily: 'inherit',
    width: '80%',
    height: 'auto',
    maxWidth: '300px',
    zIndex: '20'
})

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

const Header = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    position: fixed;
    top:0px;
    left:0px;
    z-index: 1001;
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