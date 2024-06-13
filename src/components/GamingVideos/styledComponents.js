import styled from 'styled-components'

export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`
export const GamingLogoAndHeadingContainer = styled.div`
  background-color: ${props => props.logoAndHeadingBgColor};
  display: flex;
  align-items: center;
  width: 70vw;
  padding-left: 20px;
`
export const GamingLogoContainer = styled.div`
  background-color: ${props => props.gameIconBgColor};
  margin-right: 15px;
  border-radius: 60px;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GamingHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingtextColor};
  margin-left: 10px;
`
