import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Name from '../assets/LogoName.png'
import LoadingVideo from './components/loadingVideo';
import EntranceVideo from './components/entranceVideo';
import Placeholders from './components/placeHolders';
import LoginButtons from './components/buttons';

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [videoFadeOut, setVideoFadeOut] = useState(false);
    const navigate = useNavigate();
    const [exist, setExist] = useState(true)


    function handleSubmit(event) {
        setLoading(true);
        event.preventDefault();
        axios.post(`${import.meta.env.VITE_URL}/login`, { email: user.email, password: user.password })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.name);
                localStorage.setItem('id', res.data.userid);
                setTimeout(() => {
                    setLoading(false);
                    navigate('/home');
                }, 3000)

            })
            .catch((error) => {
                setLoading(false);
                alert(error.response.data);
            })
    }



    return (
        <form onSubmit={handleSubmit} style={{ width: '100%', height: '100vh' }}>
            <Page>
                <Fade>
                    <Container style={{ boxShadow: '0px 4px 24px 0px #1e1c1f99', overflow: 'hidden', position: 'relative', zIndex: '10' }}>
                        {loading ?
                            <LoadingVideo />
                            :
                            <>
                                <CusImg src={Name} />
                                <Placeholders user={user} setUser={setUser} />
                                <LoginButtons loading={loading} />
                                {exist &&
                                    <EntranceVideo videoFadeOut={videoFadeOut} setVideoFadeOut={setVideoFadeOut} setExist={setExist} />
                                }
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
    justify-content:space-around;
    font-family: 'Lexend Deca', sans-serif;
    background-image: url('https://img.freepik.com/vetores-gratis/gatos-doodle-padrao-de-fundo_53876-100663.jpg?w=1380&t=st=1691840789~exp=1691841389~hmac=e052e64957ae507111cf42dbfe6068a035f39c058fbbf0c96e8cd92920eeaa0b');
    background-size: cover;
    background-position: center;
`
const CusImg = styled.img`
    width: 80%;
    max-width: 300px;
    height: auto;
    border: 1px solid black;
    background-color: #fff1f1;
    border-radius: 15px;

`
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
    background-image: url('https://i.pinimg.com/564x/51/48/9d/51489d4a8d7bd9eefd33d9056a767455.jpg');
    
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