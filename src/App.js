import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Homepage from "./pages/Homepage";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: 'Roboto Flex', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route exact path="/" element={<Connexion />} />
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
