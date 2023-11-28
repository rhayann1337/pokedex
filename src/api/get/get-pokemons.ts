import { apiPokedex } from "../api-create"

export const getPokemons = async() => {
    const { data } = await apiPokedex.get('/pokemon')
    return data
}