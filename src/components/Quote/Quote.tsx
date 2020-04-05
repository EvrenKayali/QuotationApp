import React from "react";
import { QuoteModel } from "../../models/QuoteModel";
import styles from "./quote.module.css";

export interface Props {
  model: QuoteModel;
}

export const Quote = (props: Props) => {
  return (
    <p className={styles.text}>
      "{props.model.text}" -{" "}
      {props.model.owner == null ? "Anonymous" : props.model.owner}
    </p>
  );
};
