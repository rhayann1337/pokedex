import styled from "styled-components";

interface IColors {
  colors: string
}

export const Container = styled.main<IColors>`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: .5rem;

  height: 1.5rem;
  width: auto;

  min-width: 4rem;

  border-radius: 2rem;

  background-color: ${({ colors }) => colors};

  bottom: 1rem;

  span {
    color: #212121;
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;
  }
`