import {formatDistanceToNow} from 'date-fns'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  TrendingVideoLink,
  TrendingVideoItem,
  ThumbnailImage,
  TrendingVideoDetailsContainer,
  ProfileImage,
  ChannelDetailsContainer,
  TrendingVideoTitle,
  SocialDetailsContainer,
  ChannelName,
  Dot1,
  ViewsAndPublishedContainer,
  ViewsCount,
  Dot2,
  Published,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {trendingVideosDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    profileImageUrl,
    name,
    viewCount,
    publishedAt,
  } = trendingVideosDetails
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const titleTextColor = isLightTheme ? '#212121' : '#ffffff'
        const socialTextColor = isLightTheme ? '#616e7c' : '#94a3b8'
 const formatedDate = formatDistanceToNow(new Date(publishedAt))
 
        return (
          <>
            <TrendingVideoLink to={`/videos/${id}`}>
              <TrendingVideoItem>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <TrendingVideoDetailsContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <ChannelDetailsContainer>
                    <TrendingVideoTitle titleTextColor={titleTextColor}>
                      {title}
                    </TrendingVideoTitle>
                    <SocialDetailsContainer socialTextColor={socialTextColor}>
                      <ChannelName>{name}</ChannelName>
                      <Dot1>&#8226;</Dot1>
                      <ViewsAndPublishedContainer>
                        <ViewsCount>{viewCount} views</ViewsCount>
                        <Dot2>&#8226;</Dot2>
                        <Published>{formatedDate}</Published>
                      </ViewsAndPublishedContainer>
                    </SocialDetailsContainer>
                  </ChannelDetailsContainer>
                </TrendingVideoDetailsContainer>
              </TrendingVideoItem>
            </TrendingVideoLink>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default TrendingVideoCard
