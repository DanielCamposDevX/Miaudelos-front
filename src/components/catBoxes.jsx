import { styled } from "styled-components"

export default function CatBoxes(props) {

    const catData = props.catData;

    return (
        catData.map((cat, index) => (
            <CatBox key={index}>
                <CatImage src={cat.imageUrl} />
                <Container>
                    <h1>{cat.name}</h1>
                    <p>{cat.age}</p>
                    <p>{cat.description}</p>
                </Container>
            </CatBox>
        ))
    )
}

const CatBox = styled.div`
    background: rgb(253, 253, 253);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0.132) 100%),
                url(${props => props.imageUrl}); /* Use the imageUrl prop to set the background image */
    background-size: cover;
    background-position: center;
    z-index: 100;
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

const Container = styled.div`
    flex-direction: column;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`