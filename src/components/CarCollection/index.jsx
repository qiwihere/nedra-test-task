import CarCollectionItem from "./CarCollectionItem";
import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";
import CarCollectionEmpty from "./CarCollectionEmpty";
import Spacer from "../Spacer";

export default function CarCollection() {
  const { selectedItems } = useSelector((state) => state.collection);
  if (!selectedItems.length) return <CarCollectionEmpty />;
  return (
    <Row>
      {selectedItems.map((v, key) => (
        <Col key={key} xs={12}>
          <Spacer y={"l"}>
            <CarCollectionItem {...v} />
          </Spacer>
        </Col>
      ))}
    </Row>
  );
}
