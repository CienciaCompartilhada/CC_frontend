import React from 'react';
import styled from "styled-components";

export default function HomeOptions(){
    return(
        <OptionsDiv>
            <OptionButton>
                professores
            </OptionButton>
            <OptionButton>
                alunos
            </OptionButton>
            <OptionButton>
                pesquisas
            </OptionButton>
        </OptionsDiv>
    );
}

const OptionsDiv = styled.div`
    width: 70%;
    border-radius: 20px;
    height:50px;
    display:flex;
    align-items: center;
    justify-content: space-around;
`;

const OptionButton = styled.button`
    width: 100px;
    height: 100%;
    border-radius: 20px;
    background: none;
    border: none;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        background: #509e88;
    }
`;