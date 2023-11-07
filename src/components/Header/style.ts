import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  height: 56px;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(245, 219, 19, 1);
  box-shadow: 0px 4px 16px 0px rgba(1, 28, 64, 0.2);

  @media (min-width: 768px) {
    height: 93px;
    padding: 16px 157px;
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
