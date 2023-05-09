import { QueryClient, QueryClientProvider } from "react-query";
import Scores from "./score/Scores";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Scores />
      </QueryClientProvider>
    </>
  );
};

export default Home;
