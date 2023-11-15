import styled from "styled-components";

export const CardContainer = styled.main`
  display: flex;
  flex-direction: row;

  height: 10rem;
  width: 24rem;

  border-radius: 0.4rem;

  background-color: #F6F7F9;

  overflow: hidden;

  > section {
    display: flex;
    flex-direction: column;

    align-items: center;

    height: auto;
    width: 14rem;

    gap: 1rem;

    position: relative;

    > footer {
      display: flex;
      flex-direction: row;

      width: 100%;

      gap: 0.5rem;

      position: absolute;
      
      left: 2rem;
      bottom: 1rem;
    }

    header {
      display: flex;

      height: fit-content;

      h1 {
        font-family: Karla;
        font-size: 1.5rem;
        font-weight: 700;

        color: #212121;
        text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.10);

      }
    }

    article {
      display: flex;
      flex-direction: row;

      width: 100%;

      justify-content: flex-end;

      gap: .5rem;

      padding: .2rem;

      > section {

        display: flex;
        flex-direction: column;

        align-items: center;

        div {
          display: flex;

          align-items: center;
          justify-content: center;

          height: 2.5rem;
          width: 2.5rem;

          border-radius: 50%;
          border: 4px solid #212121;

          padding: 1rem;

          span {
            font-weight: 600;
            font-size: .75rem;

            color: #212121;
          }
        }
      }

      h2 {
        color: #4B4B4B;

        text-align: center;

        font-family: Karla;
        font-size: 1rem;

        font-weight: 400;
      }
    }
  }

  figure {
    display: flex;
    
    width: 100%;
    height: 100%;

    overflow: hidden;

    img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }

  -webkit-user-select:none;  
  -moz-user-select:none;     
  -ms-user-select:none;      
  user-select:none;  
`;
