import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Catscreen() {

    const token = localStorage.getItem('token');
    const { cat } = useParams()
    const [data, setData] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const promise = axios.get(`/cats/${cat}`, config)
        promise.then((res) => {
            setData(res.data)
        })
        promise.catch((res) => {
            alert(res)
        })

    }, [])

    return (
        <Page>
            <Container>
                {data &&
                    <>
                        <CatImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OJpBLZMQLVb2MPZ7o1F-C378KI5237GmWDKqYoGrTF3AAdhJUXCFZ8uC429YS56dgvs&usqp=CAU" />
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                            <TextCont>  <h1>Nome:</h1>   <h2>Raça:</h2>  <h2>Dono:</h2> </TextCont>
                            <TextCont style={{ textAlign: 'end' }}>  <h1>Mittens</h1>   <h2>Persa</h2>  <h2>Dono</h2></TextCont>
                        </div>
                        <Description>
                            <h2>Descrição:</h2>
                            <p></p>
                        </Description>
                    </>
                }
            </Container>
        </Page>
    )

}

const Description = styled.div`
    width: 80%;
    padding: 10px;
    h2 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 300;
        white-space: pre-wrap; 
    }
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;
    font-family: 'Lexend Deca', sans-serif;
    background-image: url('https://i.pinimg.com/564x/5d/1a/8c/5d1a8c25ed26554708c3f633509e4c91.jpg');
    background-size: cover;
    background-position: center;
`;

const Container = styled.div`
    flex-direction: column;
    display:flex;
    width: 80%;
    height: 90vh;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    z-index:10;
    border-radius: 12px;
    border: 1px solid black;
    h1{
        color: #9e0496;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    
`

const CatImage = styled.img`
    width:100%; 
    height:auto;
    border-radius: 12px;
    border: 1px solid purple;
`

const TextCont = styled.div`
    width:30%;
    display: flex;
    flex-direction: column;
`