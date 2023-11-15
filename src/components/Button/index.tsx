import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    text: string;
    width: number;
};

export function ButtonComponent({
  color,
  text,
  width,
  ...props
}: ButtonProps) {
  return (
    <S.Button  {...props} width={width} color={color}>
      {text}
    </S.Button>
  );
}
