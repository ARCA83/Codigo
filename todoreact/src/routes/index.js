//paso 1 import our component from react Router DOM
import {BrowserRouter, Routers,Route}from "react-router-dom";
//paso 2: Import our views
import { HomeView } from "../pages";

// path => es la raiz /./ login/ registro

const Router = ()=>{
    return (
        <BrowserRouter>
        <Route>
            <Route path="/" element={<HomeView/>} />
        </Route>
        </BrowserRouter>
    );
};
export default Router