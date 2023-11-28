import axios from "axios"
import { apiPokedex } from "../api-create"
import { PokemonData, PokemonStats } from "./models/pokemonResults"

export const getPokemons = async() => {
    const { data } = await apiPokedex.get<PokemonData>('/pokemon')
    data.results.forEach((pokemon, index: number) => {
        axios.get<PokemonStats>(pokemon.url).then((ab) => {
            data.results[index].abilities = ab.data.abilities
            data.results[index].name = ab.data.name
        })
    })
    return data
}