import styled from "styled-components";
import { Button } from "./Button";
import { Heart } from "./Heart";
import { Inputs } from "./Inputs";

const Container = styled.div`
  border: 1px solid red;
  background-color: grey;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  color: pink;
`;

export function Parent() {
  return (
    <>
      <Container>
        <Heading>Lorem ipsum</Heading>
      </Container>

      <Button></Button>

      <Inputs></Inputs>

      <Heart></Heart>
    </>
  );
}
