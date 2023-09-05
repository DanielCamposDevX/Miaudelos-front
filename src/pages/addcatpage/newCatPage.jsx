import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import FormBreeds from '../components/formBreeds';
import PageSecondHeader from '../../header/SecondHeader';
import AddCatInputs from './components/inputs';



export default function NewCatPage() {

    const [cat,setCat] = useState({
        name: '',
        image: '',
        breedid: '',
        color: '',
        description: ''
    })
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
            <PageSecondHeader />
            <Page>
                <Fade>
                    <Container style={{ boxShadow: '0px 4px 24px 0px #1e1c1f99' }}>
                        <AddCatInputs cat={cat} setCat={setCat}/>
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