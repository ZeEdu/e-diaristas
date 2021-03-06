import { Container } from "@mui/material";
import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
