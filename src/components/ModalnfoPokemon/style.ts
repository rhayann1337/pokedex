import styled from "styled-components";

interface IProgressBarProps{
  color: string
  progressvalue: number
}

interface IelementProps{
  color: string
}

export const ContainerModal = styled.main`
  position: absolute;
  display: flex;
  top: 25%;
  left: 25%;
  background: linear-gradient(180deg, #732119 42.19%, #d93e30 100%);
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  section {
    display: flex;
    justify-content: center;
    background: linear-gradient(270deg, #b33327 0.15%, #d93e30 100%);
    box-shadow: 4px 4px 8px 0px #011c4033;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    div {
      display: flex;
      flex-direction: column;
      margin: 1rem 0.625rem 0.375rem 0.75rem;
      footer{
        display: flex;
        gap: 0.813rem;
        justify-content: flex-end;
        margin-right: 0.9rem;
        span{

        }
      }
    }

    img {
      width: 21.32rem;
      height: 21.75rem;
    }
  }

  article {
    display: flex;
    margin: 0.5rem 1.25rem 1.563rem 0.75rem;
    flex-direction: column;
    main {
      display: flex;
      flex-direction: column;

      section{
        border-radius: .5rem;
        background: #FDFDFD;
        margin-bottom: 1.3rem;
        display: flex;
        justify-content: start;
        width: 25rem;
        height: 5rem;
        div {
            margin-left: 1.225rem;
            margin-bottom: .5rem;
            text-align: left;
            line-height: .2rem;
            p{
                font-weight: 400;
                font-size: 1rem;
                color: #000000;
            }
            span{
                font-weight: 700;
                font-size: 1rem;
                color: #000000;
            }
            img{
              margin-top: 0.5rem;
              width: 10.4rem;
              height: 0.3rem;
            }
        }
      }
      footer {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export const SpanLeftSide = styled.span<IelementProps>`
  background-color: ${({color}) => color};
  color: #212121;
  border-radius: 0.688rem;
  width: 3.026rem;
  height: 0.874rem;
  font-size: 0.75rem;
  font-family: Roboto;
  font-weight: 400;
  line-height: 0.875rem;
  text-align: center;
  margin-bottom: 1.041rem;
  box-shadow: 0rem -0.125rem 0rem 0rem #0000002E inset;
`

export const FirstDivArticle = styled.div`
  display: flex;
  gap: 3rem;
  h3 {
    font-family: Karla;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: 0em;
    color: #fdfdfd;
    line-height: 2.63rem;
  }

  label {
    display: flex;
    gap: 0.5rem;

    h4 {
      font-family: Source Sans Pro;
      font-size: 1.5rem;
      font-weight: 400;
      color: #fdfdfd;
      line-height: 3.25rem;
      text-align: center;
    }

    p {
      margin-top: 1.5rem;
      color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: #f2cb07;
    }
  }
`;

export const FirtsDivMain = styled.div`
    width: 16.5rem;
    height: 3.747rem;
    border-radius: .5rem;
    height: auto;
    display: flex;
    background: #FDFDFD;
    flex-direction: column;
    margin-bottom: 1.3rem;
    div{
        margin-left: 1.75rem;
        margin-top: 0.75rem;
        margin-bottom: 0.6rem;
        p{
            font-weight: 400;
            font-size: 1rem;
            font-style: Karla;
            text-align: left;
            color: #000000;
            line-height: .2rem;
        }
    }
`;


export const ProgressBar = styled.footer<IProgressBarProps>`
  margin-bottom: 0.55rem;
  margin-left: .01rem;
  width: 10.444rem;
  height: 0.3rem;
  background: #F6F7F9;
  border-radius: .5rem;
  margin-top: 0.8rem;
  footer{
    margin-bottom: 0.55rem;
    margin-left: .01rem;
    // max >> /* width: 10rem; */
    width: ${({progressvalue}) => progressvalue ? `${progressvalue}rem` : ""};
    height: 0.3rem;
    background: ${({color}) => color ? color : ""};
    border-radius: .5rem;
  }
`

export const DivFooter = styled.div`
  background: #FDFDFD;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.151rem;
  height: 4.371rem;
  border-radius: 0.5rem;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.288rem;
    height: 3.331rem;
    margin-top: 0.5rem;
    border: 0.188rem solid #212121;
    border-radius: 100%;
  }

  span{
    color: #212121;
    font-family: Karla;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.188rem;
  }

  p{
    margin-top: 0.394rem;
    margin-bottom: 0.313rem;
    color: #4B4B4B;
    font-family: Karla;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 0.875rem;
    text-align: center;

  }
`
