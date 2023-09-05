import { TextField } from "@mui/material";
import styled from "styled-components";


export default function SignupPlaceHolders(props) {
    return (
        <>
            <SignupHolders type='text' color='secondary' value={props.user.name} onChange={(e) => props.setUser({ ...props.user, name: e.target.value })} sx={{ marginBottom: '10px' }} label='Nome' variant="standard" required />
            <SignupHolders type='text' color='secondary' value={props.user.cpf} onChange={(e) => props.setUser({ ...props.user, cpf: e.target.value })} label='CPF' variant="standard" required />
            <SignupHolders type='email' color='secondary' value={props.user.email} onChange={(e) => props.setUser({ ...props.user, email: e.target.value })} sx={{ marginBottom: '10px' }} label='Email' variant="standard" required />
            <SignupHolders type='password' color='secondary' value={props.user.password} onChange={(e) => props.setUser({ ...props.user, password: e.target.value })} sx={{ marginBottom: '10px' }} label='Senha' variant="standard" required />
            <SignupHolders type='password' color='secondary' value={props.user.cpass} onChange={(e) => props.setUser({ ...props.user, cpass: e.target.value })} sx={{ marginBottom: '10px' }} label='Confirmar senha' variant="standard" required />
            <SignupHolders type='tel' color='secondary' value={props.user.phone} onChange={(e) => props.setUser({ ...props.user, phone: e.target.value })} sx={{ marginBottom: '10px' }} label='Telefone' variant="standard" required />
        </>
    )
}
const SignupHolders = styled(TextField)`
    margin-bottom: 10px;
`
