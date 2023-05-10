import { QueryClient, QueryClientProvider } from "react-query";
import CategoryInfo from "./score/table/ScoreTable";
import styled from 'styled-components';
import { Helmet } from 'react-helmet';


const queryClient = new QueryClient();

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
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
        <Container>
          <CategoryInfo categoryId={"458d677e-5756-492f-8de4-5f29c60cc9da"} />
          <CategoryInfo categoryId={"b117d36e-ac60-4b89-ac24-d331ee7b77bf"} />
          <CategoryInfo categoryId={"978e7eba-be57-4c77-8d63-bebfd8ae105d"} />
        </Container>
      </QueryClientProvider>

    </>
  );
};

export default Home;
