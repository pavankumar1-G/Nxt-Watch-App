import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureNote,
  RetryButton,
  BtnContainer,
} from './styledComponents'

const AllFailureViews = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const failureImg = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        const headingColor = isLightTheme ? '#212121' : '#ffffff'
        const noteColor = isLightTheme ? '#7e858e' : '#d7dfe9'
        return (
          <>
            <FailureViewContainer>
              <FailureImage src={failureImg} alt="failure view" />
              <FailureHeading headingColor={headingColor}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureNote noteColor={noteColor}>
                We are having some trouble to complete your request. Please try
                again.
              </FailureNote>
              <BtnContainer>
                <RetryButton type="button" onClick={onClickRetry}>
                  Retry
                </RetryButton>
              </BtnContainer>
            </FailureViewContainer>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default AllFailureViews
