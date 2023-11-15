import { ReactNode } from "react"
import { Header } from "../components/Header"

interface ILayout {
    children: ReactNode
}

export function Layout({ children }: ILayout){
    return (
        <Header>
            {children}
        </Header>
    )
}