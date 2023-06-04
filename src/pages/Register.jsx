import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import TitleText from "../components/TitleText";
import RegisterForms from "../components/RegisterForms";

export default function Register() {
    const { isTeacher } = useParams();
    return (
        <RegisterDiv>
            <TitleText />
            <RegisterForms isTeacher={isTeacher}/>
            <StyledLink to="/">
                <p>
                    Já tem uma conta? Entre agora!
                </p>
            </StyledLink>
        </RegisterDiv>
    );
}

const RegisterDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    min-height:100vh;
    padding:0px 25px 0px 25px;
    background-color:#63BBA2;
`;

const StyledLink = styled(Link)`
    color:#ffffff;
    width:100%;
    margin-top:36px;
    text-decoration: none;
    font-family: 'Raleway',sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
`;