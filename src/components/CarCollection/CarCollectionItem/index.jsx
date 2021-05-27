import React from "react";
import { Row, Col } from "react-grid-system";
import { Text } from "@consta/uikit/Text";
import CarCollectionItemImage from "./CarCollectionItemImage";
import {
  autoDescLang,
  bodyTypesLang,
  fuelTypesLang,
  gearboxTypesLang,
} from "../../../lang/ru";
import Spacer from "../../Spacer";

export default function CarCollectionItem({
  brand,
  bodyType,
  fuel,
  gearbox,
  image,
  mileage,
  model,
  price,
  year,
}) {
  return (
    <Row>
      <Col xs={12} sm={3}>
        <Spacer y={"s"}>
          <CarCollectionItemImage img={image} />
        </Spacer>
      </Col>
      <Col xs={12} sm={4}>
        <Spacer y={"s"}>
          <Text
            size={"l"}
            weight={"semibold"}
            display={"block"}
          >{`${brand} ${model}`}</Text>
          <Text
            view="secondary"
            display="block"
          >{`${bodyTypesLang[bodyType]} / ${fuelTypesLang[fuel]} / ${gearboxTypesLang[gearbox]}`}</Text>
        </Spacer>
      </Col>
      <Col xs={4} sm={2}>
        <Spacer y={"s"}>
          <Text>{`${mileage.toLocaleString()} ${autoDescLang.km}`}</Text>
        </Spacer>
      </Col>
      <Col xs={4} sm={1}>
        <Spacer y={"s"}>
          <Text view="secondary">{year}</Text>
        </Spacer>
      </Col>
      <Col xs={4} sm={2}>
        <Spacer y={"s"}>
          <Text weight={"bold"}>{`${price.toLocaleString()} $`}</Text>
        </Spacer>
      </Col>
    </Row>
  );
}
