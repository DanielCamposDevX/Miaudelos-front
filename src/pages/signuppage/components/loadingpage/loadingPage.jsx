import styled from "styled-components"
import VideoLoad from "./pinterest-video17.mp4"

export default function LoadingPage(props){

    return(
        <Page>
            <CusVideo src={VideoLoad}
            autoPlay
            loop
            muted />
            {props.created ? <h1>Usuário Criado!!</h1>
            :
            <h1>Criando usuário...</h1>
            }
            
        </Page>
    )
}


const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FAEEED;
    h1{
        font-size: 25px;
        position: fixed;
        bottom: 10%;
        left: 0px;
        width: 100%;
        text-align: center;
    }
`
const CusVideo = styled.video`
    width: 100%;
    height: 100%;
`