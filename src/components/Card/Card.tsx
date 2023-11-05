import React from "react";
import { CardContainer } from "./style";
import PikachuPic from "../../assets/pikachu.svg";

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <Infos>
        <Title>Pikachu</Title>
        <Stats>
          <Status>
            <div>
              <p>419</p>
            </div>
            <span>Attack</span>
          </Status>
          <Status>
            <div>
              <p>49</p>
            </div>
            <span>Defense</span>
          </Status>
        </Stats>
      </Infos>
    </CardContainer>
  );
};
