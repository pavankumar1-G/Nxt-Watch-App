import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVideoLink = styled(Link)`
  text-decoration: none;
`
export const TrendingVideoItem = styled.li`
  @media screen and (min-width: 576px) {
    display: flex;
    margin-bottom: 20px;
    padding-left: 40px;
    margin-top: 20px;
  }
`
export const ThumbnailImage = styled.img`
  width: 70vw;
  @media screen and (min-width: 576px) {
    width: 30vw;
  }
`
export const TrendingVideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`
export const ProfileImage = styled.img`
  width: 35px;
  margin-right: 10px;
  margin-top: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ChannelDetailsContainer = styled.div``
export const TrendingVideoTitle = styled.p`
  color: ${props => props.titleTextColor};
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const SocialDetailsContainer = styled.div`
  color: ${props => props.socialTextColor};
  font-size: 11px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    margin-left: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 0;
  }
`
export const Dot1 = styled.span`
  margin: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ViewsCount = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Dot2 = styled.span`
  margin: 5px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Published = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
