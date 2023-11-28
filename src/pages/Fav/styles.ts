import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100dvh - 93px);
  display: flex;
  background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);
  flex-direction: column;
  color: #000000;
`

export const InsideContainer = styled.main`
 margin: 4.563rem 9.813rem 4.375rem 9.813rem;
 h1{
    font-family: Karla;
    font-size: 2.188rem;
    font-weight: 400;
    line-height: 2.563rem;
    letter-spacing: 0.188rem;
    text-align: center;
    span{
      font-weight: 700;
    }
  }
  div{
    margin-top: 2.125rem;
    display: flex;
    justify-content: center;
      input{
      padding: 1.2rem;
      font-family: Source Sans Pro;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.25rem;
      border: 0 none;
      color: #212121CC;
      width: 68rem;
      background: #F2F2F2;
      height: 3.313rem;
      box-shadow: 0.25rem 0.25rem 1rem 0rem #011C4033;
      border-radius: 2.5rem;
      outline: none;
    }
  }
  
`