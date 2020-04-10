import React from "react";
import "./App.css";
import { QuoteModel } from "./models/QuoteModel";
import { QuotePlayer } from "./components/QuotePlayer/QuotePlayer";

export const App = () => {
  const quotes: QuoteModel[] = [
    {
      text: "I do not fear computers. I fear lack of them.",
      owner: "Isaac Asimov",
    },
    {
      text:
        "A computer once beat me at chess, but it was no match for me at kick boxing",
      owner: "Emo Philips",
    },
    {
      text:
        "Computer Science is no more about computers than astronomy is about telescopes.",
      owner: "Edsger W. Dijkstra",
    },
    {
      text:
        "The computer was born to solve problems that did not exist before.",
      owner: "Bill Gates",
    },
    {
      text:
        "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.",
      owner: "Norman Augustine",
    },
  ];

  return (
    <div className="App">
      <QuotePlayer quotes={quotes}></QuotePlayer>
    </div>
  );
};

export default App;
