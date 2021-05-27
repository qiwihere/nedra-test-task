import React from "react";
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";
import Catalog from "./views/Catalog";
import { Container } from "react-grid-system";

export default function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <Container>
        <Catalog />
      </Container>
    </Theme>
  );
}
