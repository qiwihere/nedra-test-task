import React from "react";

export default function CarCollectionItemImage({ img }) {
  const style = {
    width: "100%",
    minHeight: "150px",
    backgroundImage: `url("${img}")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "4px",
  };
  return <div style={style} />;
}
