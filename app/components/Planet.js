/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import { HexGrid, Layout, Hexagon, GridGenerator } from "react-hexgrid";
import { useState, useEffect } from "react";

const Planet = ({ size, name }) => {
  const hexagons = GridGenerator.hexagon(size);

  return (
    <div>
      <div>{name}</div>
      <HexGrid width={400} height={400}>
        <Layout size={{ x: 4, y: 4 }} spacing={1.03}>
          {hexagons.map((hex, i) => (
            <Hexagon
              // cellStyle={{ fill: "green" }}
              key={i}
              q={hex.q}
              r={hex.r}
              s={hex.s}
            />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default Planet;
