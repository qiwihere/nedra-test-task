import React from "react";
import { Row, Col } from "react-grid-system";
import { BasicSelect } from "@consta/uikit/BasicSelect";
import getFilterValues from "./getFilterValues";
import { autoDescLang, uiLang } from "../../lang/ru";
import useFilter from "./useFilter";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { IconTrash } from "@consta/uikit/IconTrash";
import { useDispatch, useSelector } from "react-redux";
import { Combobox } from "@consta/uikit/Combobox";
import { applyFilter } from "../../store/actions";
import { Spacer } from "../index";

export default function Filter() {
  const dispatch = useDispatch();
  const { bodyTypesSelect, gearboxTypesSelect, fuelTypesSelect, yearsSelect } =
    getFilterValues();
  const { filter, onChange, clear, filterAvailable, resetAvailable } =
    useFilter();

  const { brands, models } = useSelector((state) => state.collection);

  return (
    <Row>
      <Col xs={12} sm={4}>
        <Spacer y={"xs"}>
          <Combobox
            id="brand"
            value={filter.brand}
            options={brands.map((v) => ({ label: v, value: v }))}
            onChange={(value) => onChange({ id: "brand", value })}
            getOptionLabel={(option) => option.label}
            placeholder={autoDescLang.brand}
          />
        </Spacer>
      </Col>
      <Col xs={12} sm={4}>
        <Spacer y={"xs"}>
          <Combobox
            id="model"
            value={filter.model}
            options={models.map((v) => ({ label: v, value: v }))}
            onChange={(value) => onChange({ id: "model", value })}
            getOptionLabel={(option) => option.label}
            placeholder={autoDescLang.model}
          />
        </Spacer>
      </Col>
      <Col xs={12} sm={4}>
        <Spacer y={"xs"}>
          <BasicSelect
            options={bodyTypesSelect}
            value={filter.bodyType}
            onChange={(value) => onChange({ id: "bodyType", value })}
            id="bodyType"
            getOptionLabel={(option) => option.label}
            placeholder={autoDescLang.bodyType}
          />
        </Spacer>
      </Col>
      <Col xs={12} sm={4}>
        <Spacer y={"xs"}>
          <BasicSelect
            options={gearboxTypesSelect}
            id="gearbox"
            value={filter.gearbox}
            onChange={(value) => onChange({ id: "gearbox", value })}
            getOptionLabel={(option) => option.label}
            placeholder={autoDescLang.gearbox}
          />
        </Spacer>
      </Col>
      <Col xs={12} sm={4}>
        <Spacer y={"xs"}>
          <BasicSelect
            options={fuelTypesSelect}
            id="fuel"
            value={filter.fuel}
            onChange={(value) => onChange({ id: "fuel", value })}
            getOptionLabel={(option) => option.label}
            placeholder={autoDescLang.fuel}
          />
        </Spacer>
      </Col>
      <Col xs={6} sm={2}>
        <Spacer y={"xs"}>
          <TextField
            type={"number"}
            id={"priceFrom"}
            width={"full"}
            onChange={onChange}
            value={filter.priceFrom}
            placeholder={`${autoDescLang.priceFrom}, $`}
          />
        </Spacer>
      </Col>
      <Col xs={6} sm={2}>
        <Spacer y={"xs"}>
          <TextField
            type={"number"}
            id={"priceTo"}
            width={"full"}
            onChange={onChange}
            value={filter.priceTo}
            placeholder={autoDescLang.priceTo}
          />
        </Spacer>
      </Col>
      <Col xs={6} sm={2}>
        <Spacer y={"xs"}>
          <TextField
            type={"number"}
            id={"mileageFrom"}
            width={"full"}
            onChange={onChange}
            value={filter.mileageFrom}
            placeholder={autoDescLang.mileageFrom}
          />
        </Spacer>
      </Col>
      <Col xs={6} sm={2}>
        <Spacer y={"xs"}>
          <TextField
            type={"number"}
            id={"mileageTo"}
            width={"full"}
            onChange={onChange}
            value={filter.mileageTo}
            placeholder={autoDescLang.mileageTo}
          />
        </Spacer>
      </Col>
      <Col xs={6} sm={2}>
        <Spacer y={"xs"}>
          <BasicSelect
            options={yearsSelect}
            id="yearFrom"
            value={filter.yearFrom}
            onChange={(value) => onChange({ id: "yearFrom", value })}
            getOptionLabel={(option) => option.label}
            placeholder={autoDescLang.yearFrom}
          />
        </Spacer>
      </Col>
      <Col xs={6} sm={2}>
        <Spacer y={"xs"}>
          <BasicSelect
            options={yearsSelect}
            id="yearTo"
            value={filter.yearTo}
            onChange={(value) => onChange({ id: "yearTo", value })}
            getOptionLabel={(option) => option.label}
            placeholder={autoDescLang.yearTo}
          />
        </Spacer>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={6} sm={2}>
            <Spacer y={"xs"}>
              <Button
                label={uiLang.show}
                width="full"
                onClick={() => dispatch(applyFilter())}
                disabled={!filterAvailable}
              />
            </Spacer>
          </Col>
          {filterAvailable || resetAvailable ? (
            <Col xs={6} sm={2}>
              <Spacer y={"xs"}>
                <Button
                  label={uiLang.clear}
                  width="full"
                  view="clear"
                  iconLeft={IconTrash}
                  onClick={clear}
                />
              </Spacer>
            </Col>
          ) : null}
        </Row>
      </Col>
    </Row>
  );
}
