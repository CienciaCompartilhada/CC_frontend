import styled from 'styled-components';
import Menu from '../components/Menu/Menu';
import ResearchFeed from '../components/Home/ResearchFeed';

export default function Home() {
    return(
        <HomeDiv>
        <Menu/>
        <HomeFeed>
            <ResearchFeed/>
        </HomeFeed>
        </HomeDiv>
    );
}

const HomeDiv = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const HomeFeed = styled.div`
    background: linear-gradient(to bottom, #63BBA2, #8DD4E0);
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
`;