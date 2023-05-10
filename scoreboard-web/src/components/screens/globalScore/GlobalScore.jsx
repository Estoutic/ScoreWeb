import styled from "styled-components";
import LinkButton from "../../global-somponents/LinkButton";
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

const Line = styled.div`
  position: relative;
  margin-top: 30px;
  min-height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: translateY(-50%);
  }
`;

const GlobalScore = () => {
  return (
    <>
      <Line />
      <Title>Global Score </Title>
      <Container>
        <ScoreTable categoryId={"966c95e5-3a98-4b92-8216-454f4c0024e3"} />
        <ScoreTable categoryId={"c05ab3f5-23a3-4afe-a19d-0428525b7106"} />
        <ScoreTable categoryId={"c64c4bc0-952f-4ad3-b032-91445f8e024b"} />
      </Container>
      <LinkButton way = "/worker" text={"Worker"}/>

    </>
  );
};

export default GlobalScore;
