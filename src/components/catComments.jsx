import styled from "styled-components"
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from "react";
import axios from "axios";

export default function CatComments(props) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const promise = axios.get(`${import.meta.env.VITE_URL}/${props.id}/comments`)
            .then((res) => {
                setComments(res.data)
            })
            .catch((res) => {
                alert(res.data);
            })
    }, [])

    return (
        comments.map((comment) => (
            <Comment>
                <h2>{comment.name}:</h2>
                <StyledRating readOnly defaultValue={comment.rate} getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`} precision={0.5} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
                <p>{coment.text}</p>
            </Comment>
        ))
    )
}

const Comment = styled.div`
    width: 100%;
    border: 1px solid black;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0px 4px 24px 0px #403c4222;
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 300;
        white-space: pre-wrap; 
    }
`

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});