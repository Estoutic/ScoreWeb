import DashBoard from "./components/DashBoard";
import styled from 'styled-components';
import LinkButton from "../../global-somponents/LinkButton";

const Line = styled.div`
  position: relative;
  margin-top: 30px ;
  min-height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: translateY(-50%);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const WorkerScore = () => {
  return (
    <>
      <Line />
      <Container>
        <DashBoard
          workerId={"01c5062a-dda8-4fb6-90c9-9976d751d661"}
        ></DashBoard>
      </Container>
      <LinkButton way = "/" text={"Home"}/>

    </>
  );
};
export default WorkerScore;
