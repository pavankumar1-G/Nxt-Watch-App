import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  GamingVideoCardLink,
  GamingVideoCardItem,
  GameThumbnailImage,
  GameTitle,
  GameViewCount,
} from './styledComponents'

const GamingVideoCard = props => {
  const {gamingVideoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingVideoDetails
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const titleTextColor = isLightTheme ? '#212121' : '#ffffff'
        const socialTextColor = isLightTheme ? '#616e7c' : '#94a3b8'

        return (
          <>
            <GamingVideoCardLink to={`/videos/${id}`}>
              <GamingVideoCardItem>
                <GameThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <GameTitle titleTextColor={titleTextColor}>{title}</GameTitle>
                <GameViewCount socialTextColor={socialTextColor}>
                  {viewCount} Watching Worldwide
                </GameViewCount>
              </GamingVideoCardItem>
            </GamingVideoCardLink>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default GamingVideoCard
