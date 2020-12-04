import React from "react";
import { Navbar, Footer, Book } from "./components";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar title="Flight Booker" />
      <Book />
      <Footer />
    </div>
  );
}

export default App;