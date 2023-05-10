import { QueryClient, QueryClientProvider } from "react-query";
import CategoryInfo from "./score/table/public/ScoreTable";
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import DashBoard from "./score/table/worker/DashBoard";


const queryClient = new QueryClient();

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
  padding-top: 20px ;
  color: white;
`;

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


const Home = () => {
  return (
    <>
  <Helmet>
        <style type="text/css">{`
          body {
            background: #3b3d3e;
          }
        `}</style>
      </Helmet>

      <QueryClientProvider client={queryClient}>
      <Line/>
      <Title>Global Score </Title>
        <Container>
          <CategoryInfo categoryId={"966c95e5-3a98-4b92-8216-454f4c0024e3"} />
          <CategoryInfo categoryId={"c05ab3f5-23a3-4afe-a19d-0428525b7106"} />
          <CategoryInfo categoryId={"c64c4bc0-952f-4ad3-b032-91445f8e024b"} />
        </Container>
        <Line/>
        <Container>
          <DashBoard workerId={"01c5062a-dda8-4fb6-90c9-9976d751d661"}></DashBoard>
        </Container>
      </QueryClientProvider>

    </>
  );
};

export default Home;
