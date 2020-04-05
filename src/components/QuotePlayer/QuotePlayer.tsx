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

  const [playerState, setPlayerState] = useState<boolean>(true);

  const { start, stop } = useInterval(true, 3000, () => {
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

  return (
    <div className={styles.container}>
      <Quote model={selectedQuote} />
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
  );
};
