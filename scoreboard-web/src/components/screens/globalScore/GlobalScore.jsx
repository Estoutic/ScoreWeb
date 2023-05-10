import styled from "styled-components";
import Sticker from "../../global-components/Sticker";
import TopBar from "../../global-components/TopBar";
import ScoreTable from './components/ScoreTable';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: left;
  margin-left: 30px;
  padding-top: 20px;
  color: white;
`;


const GlobalScore = () => {
  return (
    <><TopBar/>
      <Title>Global Score </Title>
      <Container>
        <ScoreTable categoryId={"966c95e5-3a98-4b92-8216-454f4c0024e3"} />
        <ScoreTable categoryId={"c05ab3f5-23a3-4afe-a19d-0428525b7106"} />
        <ScoreTable categoryId={"c64c4bc0-952f-4ad3-b032-91445f8e024b"} />
      </Container>
    <Sticker/>
    </>
  );
};

export default GlobalScore;
