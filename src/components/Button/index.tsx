import * as S from './styles'

interface IButtonComponent {
    color: string
    text: string
    whidth: number
}
export function ButtonComponent({ color, text, whidth }: IButtonComponent) {
    return <S.Button whidth={whidth} color={color}>{text}</S.Button>
}