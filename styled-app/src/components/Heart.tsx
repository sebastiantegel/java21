import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const HeartBeat = keyframes`
  0% {
    transform: rotate(45deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const HeartContainer = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  position: relative;
  transform: rotate(45deg);

  &::after,
  &::before {
    content: "";
    height: 100px;
    width: 100px;
    position: absolute;
    border-radius: 50%;
    background-color: red;
  }

  &::before {
    left: -50px;
  }

  &::after {
    left: 0;
    top: -50px;
  }

  animation: ${HeartBeat} 2s linear infinite;
`;

export function Heart() {
  return (
    <Container>
      <HeartContainer></HeartContainer>
    </Container>
  );
}
