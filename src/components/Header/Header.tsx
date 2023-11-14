import React from "react";
import { ContainerHeader } from "./style";
import PokemonLogo from "../../assets/Logo.svg";

export const Header: React.FC = () => {
  return (
    <ContainerHeader className="Header">
      <img src={PokemonLogo} alt="PokemonLogo" />
      <div>
        <a>Home</a>
        <a>Pokédex</a>
        <a>Legendaries</a>
        <a>Documentation</a>
      </div>
    </ContainerHeader>
  );
};
