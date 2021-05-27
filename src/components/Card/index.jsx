import { useThemeVars } from "@consta/uikit/useThemeVars";
import React from "react";

export default function Card({ children }) {
  const theme = useThemeVars();
  const style = {
    background: theme.color.accent,
    borderRadius: "4px",
    boxShadow:
      "0px 2px 2px rgba(0, 32, 51, 0.02), 0px 2px 8px rgba(0, 32, 51, 0.16)",
    padding: theme.space["--space-m"],
  };
  return <div style={style}>{children}</div>;
}
