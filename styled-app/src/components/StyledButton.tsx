import styled from "styled-components";

interface IStyledButtonProps {
  color?: string;
  background?: string;
}

export const StyledButton = styled.button`
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid grey;

  color: ${(props: IStyledButtonProps) => props.color || "black"};
  background-color: ${(props: IStyledButtonProps) =>
    props.background || "white"};
`;
