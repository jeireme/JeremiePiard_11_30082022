import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion/Connexion";
import Homepage from "./pages/Homepage/Homepage";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: 'Roboto Flex', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route exact path="/JeremiePiard_12_30082022/" element={<Connexion />} />
          <Route
            path="/JeremiePiard_12_30082022/user/:id"
            element={<Homepage />}
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
