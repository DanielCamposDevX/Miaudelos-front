import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function CatBoxes(props) {

    const navigate = useNavigate();


    function handleClick(id) {
        navigate(`/cats/${id}`);
    }

    return (
        <>
            {props.catData.length === 0 ? (
                <div style={{position: 'relative'}}>
                    <CatImage style={{borderRadius: '12px'}}src="https://st3.depositphotos.com/4203211/32713/i/600/depositphotos_327130716-stock-photo-red-maine-coon-cat-laying.jpg" />
                        <p style={{position: 'absolute', color: 'yellow', top: '10px', right: '0px', fontSize: '20px', fontFamily: 'Lexend Deca',backgroundColor:'black'}}>404 - NIOWNT FOUND!?</p>
                </div>
            ) : (
                props.catData.map((cat) => (
                    <CatBox key={cat.id} onClick={() => { handleClick(cat.id) }}>
                        <CatImage src={cat.image} />
                        <ContainerCat>
                            <h1>{cat.name}</h1>
                            <ContainerCat style={{ flexDirection: 'column', width: '50%', backgroundColor: 'transparent', border: 'none' }}>
                                <p>{cat.breed}</p>
                                <p>{cat.color}</p>
                            </ContainerCat>
                        </ContainerCat>
                    </CatBox>
                ))
            )}
        </>
    )
}



const CatBox = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 300px;
    border-radius: 12px;
    box-shadow: 0px 4px 24px 0px #383d345a;
    overflow: clip;
    color: black;
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
    `
const ContainerCat = styled.div`
    flex-direction: flex;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    z-index:10;
    height: 50px;
    border-top: 1px solid black;
`
