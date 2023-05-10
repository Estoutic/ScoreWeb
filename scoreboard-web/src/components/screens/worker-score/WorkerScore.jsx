import DashBoard from "./components/DashBoard";
import styled from "styled-components";
import TopBar from "../../global-components/TopBar";
import Sticker from "../../global-components/Sticker";

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
      <TopBar />
      <Container>
        <DashBoard
          workerId={"01c5062a-dda8-4fb6-90c9-9976d751d661"}
        ></DashBoard>
      </Container>
    <Sticker/>
    </>
  );
};
export default WorkerScore;
