import React from "react";
import { ButtonBurger, ContainerHeader, ContainerItems } from "./style";
import PokemonLogo from "../../assets/Logo.svg";
import BurgerButton from "../../assets/burgerbutton.svg";

export const Header: React.FC = () => {
  return (
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
  );
};