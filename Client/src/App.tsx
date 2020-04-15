import React from "react";
import "./App.css";
import { QuotePlayer } from "./components/QuotePlayer/QuotePlayer";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <QuotePlayer></QuotePlayer>
    </div>
  );
};

export default App;
