import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h2>{err.error.message}</h2>
    </>
  );
};

export default Error;
