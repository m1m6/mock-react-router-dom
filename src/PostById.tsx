import React from "react";
import { useParams } from "react-router-dom";

export default function () {
  const params = useParams();

  return <div>Post By Id: {JSON.stringify(params)}</div>;
}
