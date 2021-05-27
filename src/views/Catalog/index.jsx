import {
  CarCollection,
  Filter,
  Card,
  SearchBar,
  Spacer,
} from "../../components";
import React, { useState } from "react";
import { Text } from "@consta/uikit/Text";
import { Tabs } from "@consta/uikit/Tabs";
import { uiLang } from "../../lang/ru";
import SortDropdown from "../../components/SortDropdown";
import { Row, Col } from "react-grid-system";

const selectorTabItems = [
  { value: "search", label: uiLang.search, component: SearchBar },
  { value: "filter", label: uiLang.filter, component: Filter },
];

export default function Catalog() {
  const [tab, setTab] = useState(selectorTabItems[0]);
  return (
    <Row>
      <Col xs={12}>
        <Spacer y={"l"}>
          <Text size={"4xl"}>{uiLang.catalog}</Text>
        </Spacer>
      </Col>
      <Col xs={12}>
        <Card>
          <Tabs
            value={tab}
            onChange={({ value }) => setTab(value)}
            items={selectorTabItems}
            getLabel={(item) => item.label}
          />
          <Row>
            <Col xs={12}>
              <Spacer y={"l"}>{React.createElement(tab.component)}</Spacer>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={12} sm={3}>
            <Spacer y={"l"}>
              <SortDropdown />
            </Spacer>
          </Col>
        </Row>
      </Col>
      <Col col={12}>
        <CarCollection />
      </Col>
    </Row>
  );
}
