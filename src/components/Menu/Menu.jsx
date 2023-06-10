import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import HomeOptions from "./MenuOptions";
export default function Menu(){
    return(
    <MenuDiv>
        <MenuLogo src="https://github.com/CienciaCompartilhada/assets/blob/main/logo.png?raw=true"/>
        <HomeOptions/>
        <LogoutButton/>
    </MenuDiv>
    );
}

//#8DD4E0;

const MenuDiv = styled.div`
    width:100vw;
    height: 70px;
    background-color: #63BBA2;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const MenuLogo = styled.img`
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;