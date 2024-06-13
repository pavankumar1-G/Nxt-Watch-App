import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SavedVideoLink = styled(Link)`
  text-decoration: none;
`
export const SavedVideoItem = styled.li`
  @media screen and (min-width: 576px) {
    display: flex;
    padding: 10px;
  }
`
export const ThumbnailImg = styled.img`
  width: 70vw;
  @media screen and (min-width: 576px) {
    width: 25vw;
  }
`
export const SavedVideoDetailsContainer = styled.div`
  display: flex;
  width: 70vw;
  @media screen and (min-width: 576px) {
    width: 45vw;
    padding-right: 10px;
    padding-left: 15px;
  }
`
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ContentContainer = styled.div``
export const Title = styled.p`
  font-size: 12px;
  color: ${props => props.titleTextColor};
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`
export const SocialDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 0;
  color: ${props => props.socialTextColor};
  @media screen and (min-width: 576px) {
    font-size: 8px;
  }
`
export const ChannelName = styled.p`
  font-size: 10px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`
export const Dot1 = styled.span`
  margin: 5px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Views = styled.p`
  font-size: 10px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`
export const Dot2 = styled.span`
  margin: 5px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`
export const Published = styled.p`
  font-size: 10px;
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`
