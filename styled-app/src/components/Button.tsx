import styled from "styled-components";
import { StyledButton } from "./StyledButton";

export function Button() {
  return (
    <>
      <StyledButton>Spara</StyledButton>
      <StyledButton color="purple" background="palevioletred">
        Avbryt
      </StyledButton>
    </>
  );
}
