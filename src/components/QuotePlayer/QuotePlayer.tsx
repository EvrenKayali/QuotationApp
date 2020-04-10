import React, { useState } from "react";
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

  const [delay, setDelay] = useState(500);

  const [isRunning, setIsRunning] = useState<boolean>(true);

  useInterval(isRunning ? delay : null, () => {
    setSelectedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  });

  function handleIsRunningChange() {
    setIsRunning(!isRunning);
  }

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
      </div>
    </div>
  );
};
