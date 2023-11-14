import * as S from "./style";
import CharzizardSVG from "../../assets/Charizard.svg";
import { ImodalInfoPokemonInterface } from "./interfaces/modalInfoPokemonInterface";

export function ModalInfoPokemon({
  // imgSrc,
  // firtCategory,
  // secondCategory,
  // name,
  // generation,
  // valueGeneration,
  // abilities,
  // pointsHealthy,
  // progressHealthy,
  // pointsExperience,
  // progressExperience,
  // defense,
  // attack,
  // spAttack,
  // spDefense,
}: ImodalInfoPokemonInterface) {
  return (
    <S.ContainerModal>
      <section>
        <div>
          <img src={CharzizardSVG} alt="pokemon image" />
          <footer>
          <S.SpanLeftSide color={"#73D677"}>{"Grass"}</S.SpanLeftSide>
          <S.SpanLeftSide color={"#07D6F2"}>{"Poison"}</S.SpanLeftSide>
          </footer>
        </div>
      </section>
      <article>
        <S.FirstDivArticle>
          <h3>{"Charizard"}</h3>
          <label>
            <h4>{"Generation 1"}</h4>
            <p>{578}</p>
          </label>
        </S.FirstDivArticle>
        <main>
          <S.FirtsDivMain>
            <div>
              <p>abilities</p>
              <p>{"Overgrow - Chlorophyll"}</p>
            </div>
          </S.FirtsDivMain>
          <section>
            <div>
              <p>Healthy Points</p>
              <span>{1000000}</span>
              <S.ProgressBar
                progressvalue={2}
                color="linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)"
              >
                <footer />
              </S.ProgressBar>
            </div>
            <div>
              <p>Experience</p>
              <span>{1000000}</span>
              <S.ProgressBar
                progressvalue={5}
                color="linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)"
              >
                <footer />
              </S.ProgressBar>
            </div>
          </section>
          <footer>
            <S.DivFooter>
              <div>
                <span>{49}</span>
              </div>
              <p>Defense</p>
            </S.DivFooter>
            <S.DivFooter>
              <div>
                <span>{165}</span>
              </div>
              <p>Attack</p>
            </S.DivFooter>
            <S.DivFooter>
              <div>
                <span>{130}</span>
              </div>
              <p>Sp Attack</p>
            </S.DivFooter>
            <S.DivFooter>
              <div>
                <span>{271}</span>
              </div>
              <p>Sp Defense</p>
            </S.DivFooter>
          </footer>
        </main>
      </article>
    </S.ContainerModal>
  );
}
