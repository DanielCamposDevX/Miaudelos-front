import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom"

export default function SignUpButtons(props) {
    const navigate = useNavigate();

    return (
        <>
            <LoadingButton variant="contained" loading={props.loading} style={{ backgroundColor: 'orange', marginTop: '20px', fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none' }} type='submit'>
                Cadastrar
            </LoadingButton>
            <LoadingButton variant="contained" style={{ backgroundColor: 'purple', marginTop: '20px', fontWeight: '700', fontFamily: 'Lexend Deca', textTransform: 'none' }} onClick={() => { navigate('/') }}>
                Já tenho login
            </LoadingButton>
        </>
    )
}