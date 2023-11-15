import * as S from './styles'

export function SlugComponent( { colors, slug }: { colors: string, slug: string} ) {
  return (
    <S.Container colors={colors}>
      <span> {slug} </span>
    </S.Container>
  )
}