import React, { useState, ChangeEvent } from "react";
import { Quote } from "../Quote/Quote";
import { QuoteModel } from "../../models/QuoteModel";
import { useInterval } from "../../hooks/useInterval";

import styles from "./quotePlayer.module.css";

export interface props {
  quotes: QuoteModel[];
}

export const QuotePlayer = ({ quotes }: props) => {
  const [selectedQuote, setSelectedQuote] = useState<QuoteModel>(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const [delay, setDelay] = useState(1000);

  const [isRunning, setIsRunning] = useState<boolean>(true);

  useInterval(isRunning ? delay : null, () => {
    setSelectedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  });

  const handleIsRunningChange = () => {
    setIsRunning(!isRunning);
  };

  const handleDelayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      <Quote model={selectedQuote} />
      <div className={styles.controlPanel}>
        <button
          onClick={handleIsRunningChange}
          className={
            isRunning === true
              ? `${styles.button} ${styles.error}`
              : `${styles.button} ${styles.success}`
          }
        >
          {isRunning === true ? "Stop" : "Start"}
        </button>
        <div>
          <label>speed in ms: </label>
          <input value={delay} type="text" onChange={handleDelayChange}></input>
        </div>
      </div>
    </div>
  );
};
