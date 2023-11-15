import styled from "styled-components"

export const ContainerPokemon = styled.div`
    .Pokemon {
       width: 200px;
       margin: 20px 0 0 20px;
    }

    .PokemonImage {
        position: absolute;
        z-index: +1;
        top: 130px;
        left: -10px;
        width: 250px;
    }

    .ContainerImg {
        height: 230px;
        border-radius: 24px 24px 0 0;
        background: radial-gradient(150% 150% at 0% 100%, #B57E10 0%, #B57E10 0.31%, #F9DF7B 30.58%, #FFF3A6 65.38%, #F9DF7B 72.13%, #B57E10 100%);
    }

    .ContainerName {
        display: flex;
        justify-content: space-between;
        background-color: white;
        align-items: center;
        position: absolute;
        width: 200px;
        height: 70px;
        top: 330px;
        border-radius: 24px;
    }

    .ContainerName h1 {
        color: #1D1E1D;
        font-family: 'Roboto', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-left: 20px;
    }

    .Pokebola {
        width: 25px;
        margin-right: 20px;
        border-radius: 50%;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    

`