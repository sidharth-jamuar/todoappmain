import React from "react";
import {Route} from "react-router-dom";
import Homepage from "../components/homepage/homepage";
import Todos from "../components/todos/todos";

export const renderRoutes=()=>{
    const routes=[
        {path:"/",Component:Homepage},
        {path:"/todos/:user",Component:Todos}
    ]
        return routes.map(route=>{
            return(
                <Route path={route.path} exact component={route.Component} key={route.path}/>
            )
        })
}
