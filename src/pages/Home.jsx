import styled from 'styled-components';
import Menu from '../components/Menu/Menu';

export default function Home() {
    return(
        <HomeDiv>
        <Menu/>
            home
        </HomeDiv>
    );
}

const HomeDiv = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;