import React from "react";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { useDispatch, useSelector } from "react-redux";
import { applySearch, clearSearch, setSearchQuery } from "../../store/actions";
import { Row, Col } from "react-grid-system";
import { IconTrash } from "@consta/uikit/IconTrash";
import { uiLang } from "../../lang/ru";
import { Spacer } from "../index";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.collection);

  return (
    <Row>
      <Col xs={12}>
        <Spacer y={"xs"}>
          <TextField
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.value))}
            placeholder={uiLang.brandOrModel}
            width={"full"}
          />
        </Spacer>
      </Col>
      <Col xs={6} sm={2}>
        <Spacer y={"xs"}>
          <Button
            label={uiLang.show}
            width="full"
            disabled={!searchQuery}
            onClick={() => dispatch(applySearch())}
          />
        </Spacer>
      </Col>
      {searchQuery ? (
        <Col xs={6} sm={2}>
          <Spacer y={"xs"}>
            <Button
              label={uiLang.clear}
              width="full"
              view="clear"
              iconLeft={IconTrash}
              onClick={() => dispatch(clearSearch())}
            />
          </Spacer>
        </Col>
      ) : null}
    </Row>
  );
}
