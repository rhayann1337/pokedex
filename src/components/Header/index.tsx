import { ButtonBurger, ContainerHeader, ContainerItems } from "./style";
import PokemonLogo from "../../assets/Logo.svg";
import BurgerButton from "../../assets/burgerbutton.svg";
import { ReactNode } from "react";

export function Header({children}: {children?: ReactNode}) {
  return (
    <>
    <ContainerHeader className="Header">
      <img src={PokemonLogo} alt="PokemonLogo" />
      <ContainerItems>
        <a>Home</a>
        <a>Pokédex</a>
        <a>Legendaries</a>
        <a>Documentation</a>
      </ContainerItems>
      <ButtonBurger>
        <img src={BurgerButton} alt="burgerButton" />
      </ButtonBurger>
    </ContainerHeader>
    {children}
    </>
  );
};
