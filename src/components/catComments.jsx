import styled from "styled-components"
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";


export default function CatComments(props) {

    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const [rate, setRate] = useState(0);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`${import.meta.env.VITE_URL}/${props.id}/comments`)
            .then((res) => {
                setComments(res.data)
            })
            .catch((res) => {
                alert(res.data);
            })
    }, [])

    function NewComment() {
        setLoading(true)
        const userid = localStorage.getItem('id')
        const promise = axios.post(`${import.meta.env.VITE_URL}/${props.id}/comments/new`, { userid, comment: text, rate })
            .then(() => {
                navigate(`/cats/${props.id}`);
                setLoading(false)
            })
            .catch((res) => {
                setLoading(false)
                alert(res.data);
            })

    }

    return (
        <>
            {comments.map((comment) => (
                <Comment key={comment.id}>
                    <h2>{comment.name}:</h2>
                    <StyledRating readOnly defaultValue={comment.rate} getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`} precision={0.5} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} />
                    <p>{comment.text}</p>
                </Comment>
            ))}
            <Comment>
                <StyledRating defaultValue={setRate} getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`} precision={0.5} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} onChange={(e) => setRate(e.target.value)} />
                <TextField id="outlined-textarea" label="Comentário" multiline onChange={(e) => setText(e.target.value)} />
                <Sbutton onClick={NewComment} color='secondary' variant="contained" loading={loading} style={{ fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none' }} type='submit'>Entrar</Sbutton>
            </Comment>
        </>)
}

const Comment = styled.div`
    width: 100%;
    border: 1px solid black;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0px 4px 24px 0px #403c4222;
    margin-bottom: 20px;
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 300;
        white-space: pre-wrap; 
    }
`

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#660394',
    },
    '& .MuiRating-iconHover': {
        color: '#d400b8',
    },
});

const Sbutton = styled(LoadingButton)({
    fontWeight: '700',
    fontFamily: 'Lexend Deca',
    textTransform: 'none',
    zIndex: '20'
})