import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  height: 56px;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(245, 219, 19, 1);
  box-shadow: 0px 4px 16px 0px rgba(1, 28, 64, 0.2);

  img {
    width: 58px;
    height: 22px;
  }

  @media (min-width: 768px) {
    height: 93px;

    img {
      width: auto;
      height: auto;
    }
  }

  @media (min-width: 1024px) {
    height: 93px;
    padding: 0 157px;
  }

  a {
    color: var(--Pharagraph, #212121);
    font-family: Karla;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 66px;
    cursor: pointer;
  }

  a:last-child {
    margin-right: 0;
  }
`;

export const ContainerItems = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: initial;
  }
`;

export const ButtonBurger = styled.div`
  background-color: none;
  cursor: pointer;
  width: 30px;
  height: 22px;
`;
