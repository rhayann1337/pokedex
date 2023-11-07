import {
  Button,
  Container,
  Content,
  Image,
  Subtitle,
  Texts,
  Title,
} from "./style";
import { Header } from "../../components";
import Banner from "../../assets/banner.svg";

export const Home: React.FC = () => {
  console.log("Home");
  return (
    <Container>
      <Header />
      <Content>
        <Texts>
          <Title>
            <span>Find</span> all your favorite <span>Pokemon</span>
          </Title>
          <Subtitle>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </Subtitle>
          <Button>
            <span>See pokemons</span>
          </Button>
        </Texts>
        <Image>
          <img src={Banner} alt="Banner" />
        </Image>
      </Content>
    </Container>
  );
};
