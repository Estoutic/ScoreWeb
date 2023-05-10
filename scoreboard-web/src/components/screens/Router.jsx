import {Routes, Route,BrowserRouter} from "react-router-dom"
import Home from "./Home";
const Router = () => {
    return <BrowserRouter>
    <Routes>
        <Route element = {<Home/>} path = '/'></Route>
        {/* <Route element = {<FruitDetail/>} path = 'fruit/:id'> </Route> */}
        <Route path = '*' element = {<div>Not Found</div>}></Route>
    </Routes>
    
    </BrowserRouter>
}

export default Router; 