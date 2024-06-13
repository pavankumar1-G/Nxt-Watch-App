import styled from 'styled-components'

export const SideNavbarAndNotFoundContainer = styled.div`
  display: flex;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70vw;
  padding: 10px;
  background-color: ${props => props.bgColor};
`
export const NotFoundImage = styled.img`
  width: 70%;
`
export const NotFoundHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingColor};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const NotFoundNote = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${props => props.noteColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
