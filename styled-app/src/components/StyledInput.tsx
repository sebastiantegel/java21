import styled from "styled-components";

interface IStyledInputProps {
  size?: string;
}

export const StyledInput = styled.input.attrs((props: IStyledInputProps) => ({
  type: "text",
  size: props.size || "1rem",
}))`
  border: 1px solid red;
  border-radius: 5px;
  padding: ${(props: IStyledInputProps) => props.size || "1rem"};
  margin: ${(props: IStyledInputProps) => props.size || "1rem"};
`;

export const StyledPassword = styled(StyledInput).attrs({
  type: "password",
})``;
