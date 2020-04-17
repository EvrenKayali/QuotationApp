import React, { useState, ChangeEvent, useEffect } from "react";
import { Quote } from "../Quote/Quote";
import { QuoteModel } from "../../models/QuoteModel";
import { useInterval } from "../../hooks/useInterval";

import styles from "./quotePlayer.module.css";

export const QuotePlayer = () => {
  const [isQuotesLoaded, setIsQuotesLoaded] = useState<boolean>(false);

  const [quotes, setQuotes] = useState<QuoteModel[]>();

  const [quoteIndex, setQuoteIndex] = useState<number>(0);

  const [delay, setDelay] = useState(3000);

  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/Quotation`)
      .then((response) => response.json())
      .then((response: QuoteModel[]) => {
        setQuotes(response);
        setIsQuotesLoaded(true);
        setIsRunning(true);
      });
  }, []);

  useInterval(isRunning ? delay : null, () => {
    if (quotes && quoteIndex < quotes?.length - 1) {
      setQuoteIndex(quoteIndex + 1);
    } else {
      setQuoteIndex(0);
    }
  });

  const handleIsRunningChange = () => {
    setIsRunning(!isRunning);
  };

  const handleDelayChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      {!isQuotesLoaded ? (
        "Loading..."
      ) : (
        <>
          <Quote model={quotes ? quotes[quoteIndex] : null} />
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
              <input
                value={delay}
                type="text"
                onChange={handleDelayChange}
              ></input>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
