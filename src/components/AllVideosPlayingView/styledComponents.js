import styled from 'styled-components'

export const PlayerContainer = styled.div`
  background-color: #000000;
  padding: 10px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
  @media screen and (min-width: 1330px) {
    height: 450px;
  }
  @media screen and (min-width: 992px) {
    height: 350px;
  }
  @media screen and (min-width: 1200px) {
    height: 400px;
  }
`
export const VideoPlayTitle = styled.p`
  font-size: 12px;
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.statusColor};
  font-size: 11px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ViewsCount = styled.p``
export const Dot = styled.span`
  margin: 5px;
`
export const PublishedAt = styled.p``
export const SocialMainContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SocialButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding-left: 0px;
  color: ${props => props.color};
  cursor: pointer;
  font-size: 15px;
  margin: 5px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const SocialIconText = styled.p`
  font-size: 15px;
  margin: 5px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const HorizontalLine = styled.hr`
  border: 1px solid #cccccc;
`
export const ChannelProfileContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileIcon = styled.img`
  width: 50px;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    margin-top: 15px;
  }
`
export const ChannelNameAndSubscriberContainer = styled.div`
  margin-left: 10px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ChannelName = styled.p`
  color: ${props => props.textColor};
`
export const SubscriberCount = styled.p`
  color: ${props => props.statusColor};
`

export const Description2 = styled.p`
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    display: inline;
    color: ${props => props.textColor};
  }
`
