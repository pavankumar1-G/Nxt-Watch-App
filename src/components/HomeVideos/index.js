import HomeVideoCard from '../HomeVideoCard'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  HomeVideoList,
  EmptyViewContainer,
  NoSearchResultsImg,
  NoSearchResultsHeading,
  NoSearchResultsNote,
  RetryButton,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props

  const homeVideosState = homeVideos.length

  const onClickRetryBtn = () => {
    onRetry()
  }

  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const noResultsHeadingColor = isLightTheme ? '#212121' : '#ffffff'
        const noResultsNoteColor = isLightTheme ? '#909090' : ' #94a3b8'

        return homeVideosState > 0 ? (
          <HomeVideoList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </HomeVideoList>
        ) : (
          <EmptyViewContainer>
            <NoSearchResultsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultsHeading
              noResultsHeadingColor={noResultsHeadingColor}
            >
              No Search results found
            </NoSearchResultsHeading>
            <NoSearchResultsNote noResultsNoteColor={noResultsNoteColor}>
              Try different key words or remove search filter
            </NoSearchResultsNote>
            <RetryButton type="button" onClick={onClickRetryBtn}>
              Retry
            </RetryButton>
          </EmptyViewContainer>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default HomeVideos
