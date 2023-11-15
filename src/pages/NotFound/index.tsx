import NumberNotFound from "../../assets/404.svg";
import ImageNotFound from "../../assets/NotFound.svg";
import { ButtonComponent } from "../../components/Button";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <section>
        <img className="imageNumber" src={NumberNotFound} alt="" />
        <img className="imageNotFound" src={ImageNotFound} alt="" />
      </section>
      <footer>
        <h1>
          <span>The rocket team</span> has won this time.
        </h1>
        <ButtonComponent
          width={15}
          color="#F2CB07"
          text="Return"
          onClick={() => navigate("/")}
        />
      </footer>
    </S.Container>
  );
}
