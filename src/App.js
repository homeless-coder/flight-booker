import React, { useState } from "react";
import { Navbar, Footer, Book } from "./components";
import "./App.css";
import moment from "moment";

function App() {
  const [flightType, setFlightType] = useState(0);
  const [startDate, setStartDate] = useState(
    moment(new Date()).format("DD.MM.YYYY")
  );
  const [returnDate, setReturnDate] = useState(
    moment(new Date()).format("DD.MM.YYYY")
  );

  return (
    <div className="App">
      <Navbar title="Flight Booker" />
      <Book
        startDate={startDate}
        setStartDate={setStartDate}
        flightType={flightType}
        setFlightType={setFlightType}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
      />
      <Footer />
    </div>
  );
}

export default App;
