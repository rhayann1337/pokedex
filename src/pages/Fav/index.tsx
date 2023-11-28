import { useQuery } from '@tanstack/react-query'
import * as S from './styles'
import { getPokemons } from '../../api/get/get-pokemons'

export function FavoritePokemons() {

  const { data: dataPokemons } = useQuery({queryKey: ['pokemons'], queryFn: getPokemons})
  
  console.log(dataPokemons);
  return (
    <S.Container>
      <S.InsideContainer>
        <h1>800 <span>Pokemons</span> for you to choose your favorite</h1>
        <div>
          <input type="text" placeholder='Find your pokémon...'/>
        </div>
      </S.InsideContainer>
    </S.Container>
  )
}