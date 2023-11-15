import { Header } from "../../components/Header/Header";
import { isMobile } from "react-device-detect";
import Banner from "../../assets/banner.svg";
import BannerComplete from "../../assets/bannerComplete.svg";
import { ButtonComponent } from "../../components/Button";
import {
  Container,
  ContainerButton,
  Content,
  Image,
  Subtitle,
  Texts,
  Title
} from "./style";

export function Home() {
  return (
    <>
    <Container>
      <Header />
      <Content>
        <Texts className="Texts">
          <div>
            <Title>
              <span>Find</span> all your favorite <span>Pokemon</span>
            </Title>
            <Subtitle>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </Subtitle>
              <ContainerButton className="ContainerButton">
                {/* Botão componentizado pra nao precisar estar fazendo dois estilos pra botao no projeto */}
                <ButtonComponent color="#73d677" text="See pokemons" whidth={15} />
            </ContainerButton>
          </div>
        </Texts>
        <Image>
          <img src={isMobile ? BannerComplete : Banner} alt="Banner" />
        </Image>
      </Content>
    </Container>
    </>
  );
};
