import styled from 'styled-components'

export const SideNavbarAndSavedVideosContainer = styled.div`
  display: flex;
`
export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 70vw;
`
export const SavedLogoAndHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.logoAndHeadingBgColor};
  width: 70vw;
  padding: 10px;
`
export const SavedLogoContainer = styled.div`
  background-color: ${props => props.iconBgColor};
  margin-right: 20px;
  height: 40px;
  width: 40px;
  border-radius: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    border-radius: 80px;
    margin-left: 20px;
  }
`
export const SavedVideoHeading = styled.h1`
  color: ${props => props.mainHeadingColor};
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
    margin-left: 20px;
  }
`
export const SavedVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70vw;
  text-align: center;
  background-color: ${props => props.bgColor};
`
export const NoSavedVideosImage = styled.img`
  width: 220px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 992px) {
    width: 600px;
  }
`
export const NoSavedVideoHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingText};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  @media screen and (min-width: 992px) {
    font-size: 35px;
  }
`
export const NoSavedVideoNote = styled.p`
  font-size: 15px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
  color: ${props => props.noteText};
`
