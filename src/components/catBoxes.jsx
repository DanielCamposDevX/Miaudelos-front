import { styled } from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";

export default function CatBoxes(props) {

    const [catData, setCatData] = useState('');

        useEffect(() => {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const promise = axios.get(`${import.meta.env.VITE_URL}/cats`, config)
                .then((res) => { setCatData(res.data) })
                .catch((err) => { alert(err) });
        }, [])


return (
    catData.map((cat, index) => (
        <CatBox key={index}>
            <CatImage src={cat.image} />
            <ContainerCat>
                <h1>{cat.name}</h1>
                <ContainerCat style={{ flexDirection: 'column', width: '50%' }}>
                    <p>{cat.color}</p>
                    <p>{cat.breed}</p>
                </ContainerCat>
            </ContainerCat>
        </CatBox>
    ))
)
}



const CatBox = styled.div`
    z-index: 10;
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 75%;
    max-width: 300px;
    height: 25vh;
    max-height: 300px;
    border-radius: 12px;
    box-shadow: 0px 4px 24px 0px #383d345a;
    overflow: clip;
    color: white;
    margin-bottom: 30px;

    border: 1px solid rgb(255, 134, 209);
    h1{
        z-index:1;
        font-size: 20px;
    }
    p{
        z-index:1;
        font-size: 16px;
        font-weight: 300;
    }
    @media (min-width: 660px) {
        margin-right: 30px;
        }
`

const CatImage = styled.img`
    width:100%;
    height: 100%;
    position: absolute;
`
const ContainerCat = styled.div`
    flex-direction: flex;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #77006d56;
    z-index:10;
    height: 30%;
`