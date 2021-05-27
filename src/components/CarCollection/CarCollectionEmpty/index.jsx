import { Grid, GridItem } from "@consta/uikit/Grid";
import React from "react";
import { Text } from "@consta/uikit/Text";
import { uiLang } from "../../../lang/ru";

export default function CarCollectionEmpty() {
  return (
    <Grid gap={"2xl"} cols={1} xAlign={"center"} yAlign="center">
      <GridItem col={1}>
        <Text size={"2xl"}>{uiLang.notFound}</Text>
      </GridItem>
    </Grid>
  );
}
