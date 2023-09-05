import VideoLoad from '../assets/pinterest-video9.mp4';
import { useRef } from 'react';
import styled from 'styled-components';

export default function EntranceVideo(props) {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        props.setVideoFadeOut(true);
        setTimeout(() => {
            props.setExist(false);
        }, 1000);
    };

    return (
        <CustomVideo
            ref={videoRef}
            src={VideoLoad}
            autoPlay
            muted
            onClick={handleVideoEnd}
            onEnded={handleVideoEnd}
            style={{ width: '100%', position: 'absolute', zIndex: '1000' }}
            className={props.videoFadeOut ? 'fade-out' : ''}
        />
    )
}

const CustomVideo = styled.video`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        z-index: '1000';
        `