import styled from "styled-components"
import VideoLoad from "./pinterest-video6.mp4"

export default function LoadingPage(props){

    return(
        <Page>
            <CusVideo src={VideoLoad}
            autoPlay
            loop
            muted />
        </Page>
    )
}


const Page = styled.div`
    z-index: 200;
    min-width: 100%;
    height: 70vh;
    background-color: #B5E1DF
`
const CusVideo = styled.video`
    width: 100%;
    height: 100%;
`