import {Routes, Route,BrowserRouter} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from 'react-helmet';
import GlobalScore from "./globalScore/globalScore";
import WorkerScore from "./worker-score/WorkerScore";
import Header from "../global-somponents/Header";


const queryClient = new QueryClient();


const Router = () => {
    return <BrowserRouter>
        <Helmet>
        <style type="text/css">{`
          body {
            background: #3b3d3e;
          }
        `}</style>
      </Helmet>
          <QueryClientProvider client={queryClient}>
    <Routes>
        
        <Route element = {<GlobalScore/>} path = '/'></Route>
        <Route element = {<WorkerScore/>} path = '/worker'></Route>
        <Route path = '*' element = {<div>Not Found</div>}></Route>
    </Routes>
    </QueryClientProvider>
    </BrowserRouter>
}

export default Router; 