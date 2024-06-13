import styled from 'styled-components'

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`
export const TrendingLogoAndHeadingContainer = styled.div`
  background-color: ${props => props.logoAndHeadingBgColor};
  display: flex;
  align-items: center;
  width: 70vw;
  padding-left: 20px;
`
export const TrnedingLogoContainer = styled.div`
  background-color: ${props => props.trendIconBgColor};
  margin-right: 15px;
  border-radius: 60px;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingHeading = styled.h1`
  font-size: 25px;
  color: ${props => props.headingtextColor};
  margin-left: 10px;
`
