import styled from "styled-components";

interface IStyledInputProps {
  margins?: string;
}

export const StyledInput = styled.input.attrs({
  type: "text",
  //   size: props.size || "1rem",
})`
  border: 1px solid red;
  border-radius: 5px;
  padding: ${(props: IStyledInputProps) => props.margins || "1rem"};
  margin: ${(props: IStyledInputProps) => props.margins || "1rem"};
`;

export const StyledPassword = styled(StyledInput).attrs({
  type: "password",
})``;
