import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginButtons(props) {
    const navigate = useNavigate();

    return (
        <Container>
            <Sbutton variant="contained" loading={props.loading} style={{ fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none', backgroundColor: 'purple' }} type='submit'>Entrar</Sbutton>
            <Sbutton variant="contained" style={{ backgroundColor: 'orange', fontWeight: '700', marginTop: '20px', fontFamily: 'Lexend Deca', textTransform: 'none' }} onClick={() => { navigate('/cadastro') }}>Cadastre-se</Sbutton>
        </Container>
    )
}


const Sbutton = styled(LoadingButton)({
    fontWeight: '700',
    fontFamily: 'Lexend Deca',
    textTransform: 'none',
    zIndex: '20'
})
const Container = styled.div`
    flex-direction:column;
    display:flex;
    height: auto;
    width: 90%;
    max-width: 400px;
    align-items: center;
    justify-content: space-around;    
`