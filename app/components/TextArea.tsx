/** @jsx jsx */
import { jsx } from "@emotion/core";
import { palette } from "../../palette";

const Textarea = (props) => (
  <textarea
    css={{
      width: "100%",
      borderRadius: 4,
      border: `solid ${palette.neutral500} 1px`,
    }}
    rows={5}
    {...props}
  />
);

export { Textarea };
