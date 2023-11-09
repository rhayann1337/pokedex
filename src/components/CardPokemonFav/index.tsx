import image from '../../assets/CardBoxImg.svg';
import { CardContainer } from "./style";

export function CardComponent() {
  return (
    <CardContainer>
      
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

      </section>

      <figure>
        <img src={image} alt="" />
      </figure>
    </CardContainer>
  );
}
