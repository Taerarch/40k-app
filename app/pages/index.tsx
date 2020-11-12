/** @jsx jsx */
import { jsx } from "@emotion/core";
import Link from "next/link";

const MainPage = () => (
  <div>
    <h1 css={{ textAlign: "center" }}>Some 40k battle recording app</h1>
    <p>
      Welcome! This is a side project by{" "}
      <a href="https://twitter.com/noviny">@noviny</a>, focused around improving
      their experience playing Warhammer 40k.
    </p>
    <p>
      This project is pretty tied to a small friendsgroup right now, and really
      only functions while logged in.
    </p>
    <p>If you'd like some login creds, feel free to ask me</p>
    <p>
      The best page to start at is{" "}
      <Link href="/battle">
        <a>The battle page</a>
      </Link>
    </p>
  </div>
);

export default MainPage;
