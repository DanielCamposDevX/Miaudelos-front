import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CatBoxes from "./components/catBoxes";
import CatBreeds from './components/catBreeds';
import UserContainer from './components/userContainer';
import SearchCat from './components/searchCat';
import PageHeader from '../../header/Header';
import LoadingPage from './components/loadingpage/loadingPage';



export default function Home() {

    const navigate = useNavigate();
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);
    const [name, setName] = useState('');
    const [allCats, setAllCats] = useState([]);
    const [search, setSearch] = useState(false);


    useEffect(() => {
        setLoading(true);
        setName(localStorage.getItem('user'));
        const token = localStorage.getItem('token');
        if (!token) { navigate('/') };
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const promise = axios.get(`${import.meta.env.VITE_URL}/cats`, config)
        promise.then((res) => {
            setCatData(res.data);
            setAllCats(res.data);
            setTimeout(()=>{
                setLoading(false);
            },3000)
            
        })
        promise.catch((err) => { alert(err) });
    }, [])


    return (
        <Page>
            <PageHeader setSearch={setSearch} search={search} setUser={setUser} />
            {search && <SearchCat catData={catData} setCatData={setCatData} allCats={allCats} />}
            {user &&
                <Box onClick={() => { setUser(false) }}>
                    <UserContainer name={name} user={user} />
                </Box>
            }
            <Breeds>
                <CatBreeds setCatData={setCatData} setLoading={setLoading} loading={loading} />
            </Breeds>
            <Container loading={loading} style={{ overflow: 'hidden' }}>
                {
                    !loading ?
                        <CatBoxes catData={catData} />
                        :
                        <LoadingPage />
                }
            </Container>
        </Page>
    )
}



const Page = styled.div`
    margin-top: 10vh;
    width: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Lexend Deca', sans-serif;
    background-color:#f3f1f1;
    position: relative;
    
`;



const Container = styled.div`
    flex-wrap: wrap;
    width: 90%;
    max-width: 1000px;
    min-height: 70vh;
    display:flex;  
    padding-top: ${(props) => (props.loading ? '' : '30px')} ;
    align-items: center;
    justify-content: center;
    background-image: url('https://i.pinimg.com/564x/5d/1a/8c/5d1a8c25ed26554708c3f633509e4c91.jpg');
    border-radius: 12px;
    border: 1px solid black;
    @media (min-width: 660px) {
        padding-left: ${(props) => (props.loading ? '' : '30px')};
    }
    @media (min-width: 1400px) {
        margin-top: 30px;
    }
`

const Breeds = styled.div`
    display: flex;
    width: 90%;
    height: 42px;
    margin-top: 30px;
    margin-bottom: 30px;
    overflow-x:scroll;
    overflow-y: clip;
    ::-webkit-scrollbar {
    height: 5px;
    border: none;

    }

    ::-webkit-scrollbar-track {
    border-radius: 10px;
    border: none;

    }



    ::-webkit-scrollbar-thumb {
    background: #a8a8a8; 
    border: none;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: yellow; 
    border: none;
}
    @media (min-width: 1400px) {
        flex-direction: column;
        align-items: space-between;
        justify-content: space-between;
        height: 800px;
        width:  200px;  
        overflow-y: scroll;
        position: absolute;
        left: 10px;
        top: center;
    }

`

const Box = styled.div`
    position: fixed;
    top:0px;
    left:0px;
    width: 100%;
    height: 100%;
    background-color: #ffffff42;
    z-index: 1100;

`



