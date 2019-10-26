import React from "react";
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from "./appRouter"
export default ()=>{
    return(
        <BrowserRouter>
   {renderRoutes()}
    </BrowserRouter>
    )
}