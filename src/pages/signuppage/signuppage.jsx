import axios from 'axios';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignupPlaceHolders from './components/placeholders';
import SignUpButtons from './components/buttons';
import LogoName from '../assets/LogoName.png'
import LoadingPage from './components/loadingpage/loadingPage';


export default function Signup() {

    const navigate = useNavigate();
    const [created,setCreated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
        cpass: '',
        name: '',
        cpf: '',
        phone: ''
    })


    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        if (user.password !== user.cpass) {
            alert('Senhas devem ser iguais');
            return 0;
        }
        axios.post(`${import.meta.env.VITE_URL}/signup`, {
            email: user.email,
            password: user.password,
            name: user.name,
            cpf: user.cpf,
            phone: user.phone
        })
            .then(() => {
                setCreated(true)
                setTimeout(()=>{
                    setLoading(false);
                    setCreated(false);
                    navigate('/');
                },3000)
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
                    {!loading ?
                        <>
                            <CusImg src={LogoName} />
                            <Container>
                                <SignupPlaceHolders user={user} setUser={setUser} />
                                <SignUpButtons loading={loading} />
                            </Container>
                        </>
                        :
                        <LoadingPage created={created} />
                    }
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