import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: var(--yellowGradient);

  --yellowGradient: linear-gradient(
    180deg,
    rgba(245, 219, 19, 1),
    rgba(242, 184, 7, 1)
  );
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 156px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  img {
    width: 793px;
    height: 719px;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-family: Karla;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4px;
  margin: 128px 0 64px 0;
  max-width: 506px;
  text-align: left;

  span {
    font-weight: 700;
  }
`;

export const Subtitle = styled.h2`
  color: #000;
  font-family: Karla;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  line-height: normal;
  margin: 0;
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
