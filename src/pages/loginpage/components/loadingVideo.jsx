import VideoLoad2 from '../assets/pinterest-video63.mp4';
import styled from 'styled-components';

export default function LoadingVideo() {
    return (
        <CustomVideo
            src={VideoLoad2}
            autoPlay
            muted
            loop
        />
    )
}

const CustomVideo = styled.video`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        z-index: 1000;
        `