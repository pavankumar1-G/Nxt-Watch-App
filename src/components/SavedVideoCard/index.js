import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  SavedVideoLink,
  SavedVideoItem,
  ThumbnailImg,
  SavedVideoDetailsContainer,
  ProfileImg,
  ContentContainer,
  Title,
  SocialDetailsContainer,
  ChannelName,
  Dot1,
  ViewsAndPublishedContainer,
  Views,
  Dot2,
  Published,
} from './styledComponents'

const SavedVideoCard = props => {
  const {savedVideoDetails} = props
  const {
    id,
    thumbnailUrl,
    title,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = savedVideoDetails

  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const titleTextColor = isLightTheme ? '#212121' : '#ffffff'
        const socialTextColor = isLightTheme ? '#616e7c' : '#94a3b8'

        return (
          <>
            <SavedVideoLink to={`/videos/${id}`}>
              <SavedVideoItem>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
                <SavedVideoDetailsContainer>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                  <ContentContainer>
                    <Title titleTextColor={titleTextColor}>{title}</Title>
                    <SocialDetailsContainer socialTextColor={socialTextColor}>
                      <ChannelName>{name}</ChannelName>
                      <Dot1>&#8226;</Dot1>
                      <ViewsAndPublishedContainer>
                        <Views>{viewCount} views</Views>
                        <Dot2>&#8226;</Dot2>
                        <Published>{publishedAt}</Published>
                      </ViewsAndPublishedContainer>
                    </SocialDetailsContainer>
                  </ContentContainer>
                </SavedVideoDetailsContainer>
              </SavedVideoItem>
            </SavedVideoLink>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default SavedVideoCard
