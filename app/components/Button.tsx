/** @jsx jsx */
import { jsx } from "@emotion/core";
import { palette } from "../../palette";

export const Button = (props) => (
  <button
    {...props}
    css={{
      padding: 8,
      border: 0,
      borderRadius: 15,
      backgroundColor: palette.green100,
      ":hover": {
        backgroundColor: palette.green200,
      },
      ":active": {
        backgroundColor: palette.green300,
      },
      ":disabled": {
        backgroundColor: palette.neutral300,
      },
    }}
  />
);
