import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  PlayerContainer,
  VideoPlayTitle,
  ViewsAndPublishedContainer,
  ViewsCount,
  Dot,
  PublishedAt,
  SocialMainContainer,
  SocialButtonsContainer,
  SocialButton,
  SocialIconText,
  HorizontalLine,
  ChannelProfileContainer,
  ProfileIcon,
  ChannelNameAndSubscriberContainer,
  ChannelName,
  SubscriberCount,
  Description2,
} from './styledComponents'

const AllVideosPlayingView = props => {
  const {videoItemDeta, updateLiked, updateDisliked, isLiked, isDisliked} =
    props

  const {
    id,
    title,
    videoUrl,
    // thumbnailUrl,
    name,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = videoItemDeta

  const onClickLike = () => {
    updateLiked()
  }
  const onClickDisike = () => {
    updateDisliked()
  }

  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme, savedVideos, onSavedAndUnsavedVideo} = value
        const textColor = isLightTheme ? '#231f20' : '#f1f1f1'
        const statusColor = isLightTheme ? '#909090' : '#64748b'
        let isSaved
        const isExistIndex = savedVideos.findIndex(
          eachVideo => eachVideo.id === id,
        )
        if (isExistIndex === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const savedColor = isSaved ? '#00306e' : 'statusColor'

        const onClickSavedAndUnsaved = () => {
          onSavedAndUnsavedVideo(videoItemDeta)
        }

        return (
          <>
            <PlayerContainer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </PlayerContainer>
            <VideoPlayTitle textColor={textColor}>{title}</VideoPlayTitle>
            <SocialMainContainer>
              <ViewsAndPublishedContainer statusColor={statusColor}>
                <ViewsCount>{viewCount} views</ViewsCount>
                <Dot>&#8226;</Dot>
                <PublishedAt>{publishedAt}</PublishedAt>
              </ViewsAndPublishedContainer>
              <SocialButtonsContainer>
                <SocialButton
                  type="button"
                  color={isLiked ? '#2563eb' : '#64748b'}
                  onClick={onClickLike}
                  aria-label="like"
                >
                  <AiOutlineLike size={20} />
                  Like
                </SocialButton>

                <SocialButton
                  type="button"
                  color={isDisliked ? '#2563eb' : '#64748b'}
                  onClick={onClickDisike}
                  aria-label="dislike"
                >
                  <AiOutlineDislike size={20} />
                  Dislike
                </SocialButton>

                <SocialButton
                  type="button"
                  onClick={onClickSavedAndUnsaved}
                  color={isSaved ? ' #3b82f6' : '#64748b'}
                >
                  <BiListPlus size={20} />
                  <SocialIconText>{isSaved ? 'Saved' : 'Save'}</SocialIconText>
                </SocialButton>
              </SocialButtonsContainer>
            </SocialMainContainer>
            <HorizontalLine />
            <ChannelProfileContainer>
              <ProfileIcon src={profileImageUrl} alt="channel logo" />
              <ChannelNameAndSubscriberContainer>
                <ChannelName textColor={textColor}>{name}</ChannelName>
                <SubscriberCount statusColor={statusColor}>
                  {subscriberCount} subscribers
                </SubscriberCount>
                <Description2 textColor={textColor}>{description}</Description2>
              </ChannelNameAndSubscriberContainer>
            </ChannelProfileContainer>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default AllVideosPlayingView
