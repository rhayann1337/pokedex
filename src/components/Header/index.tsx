import { ButtonBurger, ContainerHeader, ContainerItems } from "./style";
import PokemonLogo from "../../assets/Logo.svg";
import BurgerButton from "../../assets/burgerbutton.svg";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export function Header({children}: {children?: ReactNode}) {
  const navigate = useNavigate()

  return (
    <>
    <ContainerHeader className="Header">
      <img src={PokemonLogo} alt="PokemonLogo" />
      <ContainerItems>
        <a onClick={()=> navigate('/')}>Home</a>
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
