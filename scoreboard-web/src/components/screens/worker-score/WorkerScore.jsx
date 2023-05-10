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
          workerId={"3bfc813c-e19c-486e-a2b3-1aff6d29bea4"}
        ></DashBoard>
      </Container>
    <Sticker/>
    </>
  );
};
export default WorkerScore;
