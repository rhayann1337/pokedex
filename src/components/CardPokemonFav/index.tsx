import image from '../../assets/CardBoxImg.svg';
import { SlugComponent } from './components/slug';
import * as S from "./style";

export function CardComponent() {
  return (
    <S.CardContainer>
      
      <section>
        <header>
          <h1>Quilava</h1>
        </header>

        <article>
          
          <section>

            <div>
              <span>419</span>
            </div>

            <h2>Attack</h2>

          </section>

          <section>

            <div>
              <span>69</span>
            </div>

            <h2>Defense</h2>

          </section>
          
        </article>

        <footer>
          <SlugComponent colors='#73D677' slug='Grass' />
          <SlugComponent colors='#07D6F2' slug='Poison' />
        </footer>

      </section>

      <figure>
        <img src={image} alt="" />
      </figure>
    </S.CardContainer>
  );
}
