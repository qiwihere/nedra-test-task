import { useThemeVars } from "@consta/uikit/useThemeVars";
import React from "react";

export default function Spacer({ x, y, children }) {
  const theme = useThemeVars();
  const spaceX = theme.space[`--space-${x}`] || 0;
  const spaceY = theme.space[`--space-${y}`] || 0;

  const style = {
    padding: `${spaceY} ${spaceX}`,
  };

  return <div style={style}>{children}</div>;
}
