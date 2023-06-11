import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Loading from "./Loading";

export default function RegisterForms() {
    const [form, setForm] = React.useState({
        email: '',
        password: '',
        name: '',
        passwordConfirm: ''
    })
    const { isTeacher } = useParams();
    const navigate = useNavigate()
    const [submited, setSubmited] = React.useState(false)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function failedRegister(e){
        alert(e.response.data.details);
        setSubmited(false)
    }
    function doRegister(e) {
        setSubmited(true)
        e.preventDefault();
        if(form.password !== form.passwordConfirm){
            return alert("senhas diferentes")
        }
        if(isTeacher === "false" || isTeacher === "true"){
            const body = {
                name: form.name,
                email: form.email,
                password: form.password,
                is_teacher: (isTeacher === "true")
            };
            console.log(body);
            console.log(process.env.REACT_APP_API_URL);
            const loginPost = axios.post(`${process.env.REACT_APP_API_URL}users/`, body)
            loginPost.then(() => {
                alert("Registro finalizado, faça login para acessar sua conta!")
                navigate("/")
            })
            loginPost.catch((e) => failedRegister(e))
        } else {
            alert("houve um problema com sua url, tente novamente");
            navigate("/")
        }
    }
    return (
        <RegisterFormDiv>
            <form onSubmit={doRegister}>
                <input
                    disabled={false}
                    name="name"
                    type="text"
                    required
                    placeholder="Nome"
                    onChange={handleForm}
                    value={form.name}
                />
                <input
                    disabled={false}
                    name="email"
                    type="email"
                    required
                    placeholder="E-mail"
                    onChange={handleForm}
                    value={form.email}
                />
                <input
                    disabled={false}
                    name="password"
                    type="password"
                    required
                    placeholder="Senha"
                    onChange={handleForm}
                    value={form.password}
                />
                <input
                    disabled={false}
                    name="passwordConfirm"
                    type="password"
                    required
                    placeholder="Confirme sua senha"
                    onChange={handleForm}
                    value={form.passwordConfirm}
                />
                <button
                    disabled={false}
                    type="submit"
                >{submited ? <Loading /> : "Cadastrar"}</button>
            </form>
        </RegisterFormDiv>
    );
}

const RegisterFormDiv = styled.div`
    width:100%;
    max-width: 400px;
    form{
        display:flex;
        flex-direction: column;
        margin-top:24px;
        input{
            height:100%;
            max-height: 40px;
            width:100%;
            border:none;
            border-radius:5px;
            margin-bottom:13px;
            padding:17px 15px 17px 15px;
            color:#000000;
            &::placeholder{
                font-family: 'Raleway',sans-serif;
                font-size: 20px;
                font-weight: 400;
                color:#000000;
            }
        }
        button{
            cursor:pointer;
            height: 46px;
            width: 100%;
            border:none;
            border-radius: 5px;
            background-color:#263B57;
            color:#FFFFFF;
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            font-weight: 700;
        }
    }
`;