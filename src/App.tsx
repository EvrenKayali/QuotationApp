import React, { useState, useEffect } from "react";
import "./App.css";
import { Quote } from "./components/Quote/Quote";
import { QuoteModel } from "./models/QuoteModel";

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

  const [selectedQuote, setSelectedQuote] = useState<QuoteModel>(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    setTimeout(() => {
      setSelectedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
  });

  const onNext = () =>
    setSelectedQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <div className="App">
      <Quote model={selectedQuote} nextClick={onNext}></Quote>
    </div>
  );
};

export default App;
