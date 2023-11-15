import {
  Button,
  Container,
  ContainerButton,
  Content,
  Image,
  Subtitle,
  Texts,
  Title,
} from "./style";
import Banner from "../../assets/banner.svg";
import BannerComplete from "../../assets/bannerComplete.svg";
import { isMobile } from "react-device-detect";
import { Header } from "../../components/Header/Header";

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
              <Button>
                <span>See pokemons</span>
              </Button>
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
