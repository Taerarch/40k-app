/** @jsx jsx */
import { jsx } from "@emotion/core";

import { colours } from "../../lib/colours";

const Input = ({ label, labelCss, inputCss, ...rest }) => (
  <div css={{ paddingTop: 12 }}>
    <label
      css={{
        width: 80,
        display: "inline-block",
        textAlign: "right",
        paddingRight: 4,
        ...labelCss,
      }}
      htmlFor="email"
    >
      {label}:
    </label>
    <input
      css={{
        borderRadius: 4,
        border: `solid ${colours.neutral300} 1px`,
        ...inputCss,
      }}
      {...rest}
    />
  </div>
);

export { Input };
