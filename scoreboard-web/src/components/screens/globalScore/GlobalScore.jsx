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
        <ScoreTable categoryId={"44a6ced9-00bc-4a58-a57c-ce82adafab62"} />
        <ScoreTable categoryId={"93826924-34f2-479f-a1c7-193c6c5770f7"} />
        <ScoreTable categoryId={"674bbf60-65e2-497a-baf6-70d1bfcc1624"} />
      </Container>
    <Sticker/>
    </>
  );
};

export default GlobalScore;
