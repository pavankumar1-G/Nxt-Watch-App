import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  HomeVideoItem,
  ThumbnailImg,
  ProfileAndTitleContainer,
  ProfileImg,
  TitleAndNameCountPublished,
  Title,
  NameCountPublishedContainer,
  ChannelName,
  Dot1,
  Views,
  Dot2,
  Published,
  ViewAndPubContainer,
} from './styledComponents'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const titleColor = isLightTheme ? '#313131' : '#f9f9f9'
        const nameCountPublishedColor = isLightTheme ? '#424242' : '#64748b'
        const formatedDate = formatDistanceToNow(new Date(publishedAt))

        return (
          <Link to={`/videos/${id}`} className="item-link">
            <HomeVideoItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ProfileAndTitleContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <TitleAndNameCountPublished>
                  <Title titleColor={titleColor}>{title}</Title>
                  <NameCountPublishedContainer
                    nameCountPublishedColor={nameCountPublishedColor}
                  >
                    <ChannelName>{name}</ChannelName>
                    <Dot1> &#8226;</Dot1>
                    <ViewAndPubContainer>
                      <Views>{viewCount} views</Views>
                      <Dot2>&#8226;</Dot2>
                      <Published>{formatedDate}</Published>
                    </ViewAndPubContainer>
                  </NameCountPublishedContainer>
                </TitleAndNameCountPublished>
              </ProfileAndTitleContainer>
            </HomeVideoItem>
          </Link>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default HomeVideoCard
