import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideoCardLink = styled(Link)`
  text-decoration: none;
`
export const GamingVideoCardItem = styled.li`
  margin: 10px;
`
export const GameThumbnailImage = styled.img`
  width: 100px;
  @media screen and (min-width: 576px) {
    width: 114px;
  }
  @media screen and (min-width: 768px) {
    width: 159px;
  }
`
export const GameTitle = styled.p`
  font-size: 12px;
  width: 90px;
  color: ${props => props.titleTextColor};
  @media screen and (min-width: 576px) {
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 130px;
  }
`
export const GameViewCount = styled.p`
  font-size: 11px;
  width: 70px;
  font-weight: bold;
  color: ${props => props.socialTextColor};
  @media screen and (min-width: 576px) {
    width: 110px;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
