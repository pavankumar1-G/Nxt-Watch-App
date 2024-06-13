import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center:
  justify-content: center;
  min-height: 100vh;
  padding: 10px;
  text-align: center;
`
export const FailureImage = styled.img`
  width: 220px;
  margin-top: 50px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const FailureHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingColor};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const FailureNote = styled.p`
  font-size: 15px;
  color: ${props => props.noteColor};
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const RetryButton = styled.button`
  height: 36px;
  width: 100px;
  border: none;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 120px;
    font-size: 15px;
  }
`
export const BtnContainer = styled.div`
  text-align: center;
`
