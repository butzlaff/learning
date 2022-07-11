import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet";


//import Planet from "./components/planets/planet";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PlanetsScreen />} />
      <Route path='/planet/:id' element={<PlanetScreen />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;