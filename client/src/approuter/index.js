import React from "react";
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from "./appRouter"
import Header from "../components/header/header";
export default ()=>{
    return(
        <div>
           
        <BrowserRouter>
        <Header />
   {renderRoutes()}
    </BrowserRouter>
    </div>
    )
}