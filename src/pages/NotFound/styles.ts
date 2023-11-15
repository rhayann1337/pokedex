import styled from "styled-components";

export const Container = styled.main`
  background-color: #d93e30;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    position: relative;

    height: fit-content;
    width: fit-content;

    .imageNumber {
      max-height: 50rem;
      max-width: 65rem;
      opacity: 1;
    }

    .imageNotFound {
      position: absolute;
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%);
      height: 25rem;
      width: 30rem;
    }
  }

  footer {
    margin-top: 2rem;

    h1 {
        font-size: 2em; 
        margin-top: 20px; 
        color: #000000;
    }

    span {
        color: #F2F2F2;
    }
  }
 
`;