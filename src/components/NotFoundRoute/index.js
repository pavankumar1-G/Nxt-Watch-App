import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import Header from '../Header'
import SideNavbarMenu from '../SideNavbarMenu'

import {
  SideNavbarAndNotFoundContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponents'

const NotFoundRoute = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const bgColor = isLightTheme ? '#f9f9f9 ' : '#0f0f0f'
      const headingColor = isLightTheme ? '#1e293b' : '#ffffff'
      const noteColor = isLightTheme ? '#475569' : '#cbd5e1'
      const notFoundImg = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <SideNavbarAndNotFoundContainer>
            <SideNavbarMenu />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage src={notFoundImg} alt="not found" />
              <NotFoundHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundNote>
            </NotFoundContainer>
          </SideNavbarAndNotFoundContainer>
        </>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)
export default NotFoundRoute
