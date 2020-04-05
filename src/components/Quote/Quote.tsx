import React from "react";
import { QuoteModel } from "../../models/QuoteModel";
import styles from "./quote.module.css";

export interface Props {
  model: QuoteModel;
  nextClick: () => void;
}

export const Quote = (props: Props) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>
          "{props.model.text}" -{" "}
          {props.model.owner == null ? "Anonymous" : props.model.owner}
        </p>
        <button onClick={props.nextClick} className={styles.button}>
          Next
        </button>
      </div>
    </>
  );
};
