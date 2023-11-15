import styled from "styled-components";

interface IButton {
    color: string;
    whidth: number;
}

export const Button = styled.button<IButton>`
border: none;
border-radius: 11px;
background-color: ${({ color }) => color};
width: ${({ whidth }) => `${whidth}rem`};
height: 3rem;
cursor: pointer;
box-shadow: 0px - 9px 0px 0px rgba(0, 0, 0, 0.18) inset;

    color: #212121;
    text-align: center;
    font-family: Karla;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
` 