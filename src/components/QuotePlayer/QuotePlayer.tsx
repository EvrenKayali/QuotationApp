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

  const [delay, setDelay] = useState(3000);

  const [playerState, setPlayerState] = useState<boolean>(true);

  const { start, stop } = useInterval(true, delay, () => {
    setSelectedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  });

  const onPlayerStateChage = () => {
    if (playerState) {
      stop();
      setPlayerState(false);
    } else {
      start();
      setPlayerState(true);
    }
  };

  const onIntervalChange = (i: number) => {
    setDelay(i * 1000);
    console.log(i);
  };

  return (
    <div className={styles.container}>
      <Quote model={selectedQuote} />
      <div className={styles.controlPanel}>
        <button
          onClick={() => onPlayerStateChage()}
          className={
            playerState === true
              ? `${styles.button} ${styles.error}`
              : `${styles.button} ${styles.success}`
          }
        >
          {playerState === true ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};
