import React from "react";
import Nav from "./Navigation";
import "./App.css";

let arr = [
  { menu: "home" },
  { menu: "service", sm: ["for student", "for entrepner", "for messqdqs"] },
  { menu: "contact" }
];

function App() {
  return <Nav arr={arr} />;
}

export default App;
