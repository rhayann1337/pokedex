import { ContainerPokemon } from "./style";
import PokemonImg from "../../../assets/pokemonImage.svg";
import Pokebola from "../../../assets/pokebola.svg";

export function Pokemon() {
  return (
    <ContainerPokemon>
      <div className="Pokemon">
        <div className="ContainerImg">
          <img src={PokemonImg} alt="PokemonImage" className="PokemonImage" />
        </div>
        <div className="ContainerName">
          <h1>Mew</h1>
          <img src={Pokebola} alt="Pokebola" className="Pokebola" />
        </div>
      </div>
    </ContainerPokemon>
  );
}
