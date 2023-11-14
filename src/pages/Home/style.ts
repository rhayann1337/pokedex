import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: var(--yellowGradient);

  --yellowGradient: linear-gradient(
    180deg,
    rgba(245, 219, 19, 1),
    rgba(242, 184, 7, 1)
  );
`;

export const Content = styled.div`
  display: flex;
  height: calc(100vh - 93px);

  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    align-items: flex-end;
    margin-left: 156px;
    width: 100%;

    > div {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 375px;
    height: 287px;
  }

  @media (min-width: 768px) {
    img {
      width: 706px;
      height: 539px;
    }
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    img {
      width: 793px;
      height: 719px;
    }
  }
`;

export const Title = styled.h1`
  color: #000;
  font-family: Karla;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4px;
  width: 100%;

  text-align: center;

  span {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 72px;
  }

  @media (min-width: 1024px) {
    margin: 128px 0 64px 0;
    text-align: left;
    max-width: 506px;
  }
`;

export const Subtitle = styled.h2`
  color: #000;
  font-family: Karla;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: normal;
  margin: 0;

  width: 100%;

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 32px;
    max-width: 506px;
  }
`;

export const Button = styled.button`
  margin-top: 64px;
  border: none;
  border-radius: 11px;
  background: #73d677;
  padding: 17px 36px;
  cursor: pointer;
  box-shadow: 0px -9px 0px 0px rgba(0, 0, 0, 0.18) inset;

  span {
    color: #212121;
    text-align: center;
    font-family: Karla;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    justify-content: initial;
  }
`;
