import styled from 'styled-components'

export const HomeVideoItem = styled.li`
  list-style-type: none;
  padding: 5px;
  width: 240px;
  @media screen and (min-width: 576px) {
    width: 180px;
    margin: 5px;
  }
  @media screen and (min-width: 1100px) {
    width: 220px;
  }
`
export const ThumbnailImg = styled.img`
  width: 240px;
  height: 140px;
  @media screen and (min-width: 576px) {
    width: 180px;
  }
  @media screen and (min-width: 1100px) {
    width: 220px;
  }
`
export const ProfileAndTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 240px;
  @media screen and (min-width: 576px) {
    width: 180px;
  }
  @media screen and (min-width: 1100px) {
    width: 220px;
  }
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 10px;
`
export const TitleAndNameCountPublished = styled.div``
export const Title = styled.p`
  font-size: 12px;
  color: ${props => props.titleColor};
  @media screen and (min-width: 576px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 12px;
  }
`
export const NameCountPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${props => props.nameCountPublishedColor};
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  font-size: 11px;
  @media screen and (min-width: 576px) {
    font-size: 8px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1100px) {
    font-size: 10px;
  }
`
export const Dot1 = styled.span`
  margin: 3px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const Views = styled.p`
  font-size: 11px;
  @media screen and (min-width: 576px) {
    font-size: 8px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 10px;
  }
`
export const Dot2 = styled.span`
  margin: 3px;
`
export const Published = styled.p`
  font-size: 11px;
  @media screen and (min-width: 576px) {
    font-size: 8px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 10px;
  }
`
export const ViewAndPubContainer = styled.div`
  display: flex;
  align-items: center;
`
