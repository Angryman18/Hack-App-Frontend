import { Button } from "@mui/material";
// import React from "react";

function ButtonA({ onClick }: any) {
  return (
    <Button onClick={onClick} variant='outlined' size='large'>
      Call
    </Button>
  );
}

export default ButtonA;
