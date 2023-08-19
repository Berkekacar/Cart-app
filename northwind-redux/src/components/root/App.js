import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dasboard from "./Dashboard";
import {Routes, Route} from "react-router-dom"
import CartSummery from "../cart/CartSummery";

function App() {
  return (
    <Container>
      <Navi/>
      <Routes>
        <Route exact path="/" Component={Dasboard}></Route>
        <Route exact path="/cart" Component={CartSummery}></Route>
      </Routes>
      
    </Container>
  );
}

export default App;
