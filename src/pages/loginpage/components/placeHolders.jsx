import styled from "styled-components"
import { TextField } from "@mui/material"

export default function Placeholders(props) {
    return (
        <>
            <LoginHolder variant="filled" type='email' label='Email' color='secondary' required value={props.user.email} onChange={(e) => props.setUser({ ...props.user, email: e.target.value })} />
            <LoginHolder variant="filled" type='password' label='Senha' color='secondary' required value={props.user.password} onChange={(e) => props.setUser({...props.user, password: e.target.value })} />
        </>
    )
}

const LoginHolder = styled(TextField)({
    backgroundColor: '#fff1f1dc',
    fontFamily: 'inherit',
    width: '80%',
    height: 'auto',
    maxWidth: '300px',
    zIndex: '20'
})