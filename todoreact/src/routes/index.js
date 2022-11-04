//paso 1 import our component from react Router DOM
import {BrowserRouter, Routes,Route}from "react-router-dom";
//paso 2: Import our views
import { HomeView } from "../pages";

// path => es la raiz /./ login/ registro

const Router = ()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView/>} />
        </Routes>
        </BrowserRouter>
    );
};
export default Router;