import styled from "styled-components";

export default function ResearchFeed(){
    return(
        <Feed>
            <Post>
                <PostTitle>
                    <h1>Análise do Impacto do Ipsum Lorem no Avanço de Estudo Teste </h1>
                    <h2>Professor: Professor Teste Exemplo</h2>
                </PostTitle>
                <PostInfo>
                    <p>
                        Esta é uma breve descrição desta pesquisa cientifica voltada para
                        o teste de uma funcionalidade do site e pensada de forma a ser totalmente
                        aleatória e ficticia. Caso queiram participar ficciosamente desta pesquisa
                        inventada entrem em contato pelo email inexistente teste@gmail.com
                    </p>
                </PostInfo>
            </Post>
            <Post>
                <PostTitle>
                    <h1>Análise do Impacto do Ipsum Lorem no Avanço de Estudo Teste </h1>
                    <h2>Professor: Professor Teste Exemplo</h2>
                </PostTitle>
                <PostInfo>
                    <p>
                        Esta é uma breve descrição desta pesquisa cientifica voltada para
                        o teste de uma funcionalidade do site e pensada de forma a ser totalmente
                        aleatória e ficticia. Caso queiram participar ficciosamente desta pesquisa
                        inventada entrem em contato pelo email inexistente teste@gmail.com
                    </p>
                </PostInfo>
            </Post>
            <Post>
                <PostTitle>
                    <h1>Análise do Impacto do Ipsum Lorem no Avanço de Estudo Teste </h1>
                    <h2>Professor: Professor Teste Exemplo</h2>
                </PostTitle>
                <PostInfo>
                    <p>
                        Esta é uma breve descrição desta pesquisa cientifica voltada para
                        o teste de uma funcionalidade do site e pensada de forma a ser totalmente
                        aleatória e ficticia. Caso queiram participar ficciosamente desta pesquisa
                        inventada entrem em contato pelo email inexistente teste@gmail.com
                    </p>
                </PostInfo>
            </Post>
            <Post>
                <PostTitle>
                    <h1>Análise do Impacto do Ipsum Lorem no Avanço de Estudo Teste </h1>
                    <h2>Professor: Professor Teste Exemplo</h2>
                </PostTitle>
                <PostInfo>
                    <p>
                        Esta é uma breve descrição desta pesquisa cientifica voltada para
                        o teste de uma funcionalidade do site e pensada de forma a ser totalmente
                        aleatória e ficticia. Caso queiram participar ficciosamente desta pesquisa
                        inventada entrem em contato pelo email inexistente teste@gmail.com
                    </p>
                </PostInfo>
            </Post>
        </Feed>
    );
}

const Feed = styled.div`
    width: 57%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

const Post = styled.div`
    width: 80%;
    background: linear-gradient(to bottom, #82b6fa, #8DD4E0);
    border-radius: 10px;
    height: 100%;
    max-height: 500px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    img {
        height: 100%;
        max-width: 100%;
        max-height: 200px;
        border-radius: 15px;
    }
`;


const PostTitle = styled.div`
    width:100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-weight: 600;
        font-size: 25px;
    }
    h2 {
        margin-top: 10px;
        font-weight: 500;
    }
`;

const PostInfo = styled.div`
    margin-top: 30px;
    height: 100%;
    max-height: 300px;
    margin-bottom: 20px;
    overflow: auto;
`;