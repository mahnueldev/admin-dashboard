import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const RouterWrapper= () => {
    return (
        <Routes>
           <Route path='/' element={<Dashboard />} />
            <Route exact path="/statistics">
              
            </Route>
            <Route exact path="/customers">
                
            </Route>
            <Route exact path="/diagrams">
               
            </Route>
        </Routes>
    );
};

export default RouterWrapper;
