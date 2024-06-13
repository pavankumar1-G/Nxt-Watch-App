import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import Header from '../Header'
import SideNavbarMenu from '../SideNavbarMenu'
import SavedVideoCard from '../SavedVideoCard'

import {
  SideNavbarAndSavedVideosContainer,
  SavedVideosContainer,
  SavedLogoAndHeadingContainer,
  SavedLogoContainer,
  SavedVideoHeading,
  SavedVideoList,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideoHeading,
  NoSavedVideoNote,
} from './styledComponents'

const SavedVideosRoute = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isLightTheme, savedVideos} = value
      const bgColor = isLightTheme ? '#f9f9f9 ' : '#0f0f0f'
      const headingText = isLightTheme ? '#212121' : '#ffffff'
      const noteText = isLightTheme ? '#383838' : ' #f4f4f4'
      const mainHeadingColor = isLightTheme ? '#181818' : '#ffffff'
      const iconBgColor = isLightTheme ? '#cbd5e1' : '#0f0f0f'
      const logoAndHeadingBgColor = isLightTheme ? '#f4f4f4' : '#212121'
      return (
        <>
          <Header />
          <SideNavbarAndSavedVideosContainer>
            <SideNavbarMenu />
            <SavedVideosContainer bgColor={bgColor} data-testid="savedVideos">
              {savedVideos.length > 0 ? (
                <div>
                  <SavedLogoAndHeadingContainer
                    logoAndHeadingBgColor={logoAndHeadingBgColor}
                  >
                    <SavedLogoContainer iconBgColor={iconBgColor}>
                      <CgPlayListAdd size={25} color="#ff0000" />
                    </SavedLogoContainer>
                    <SavedVideoHeading mainHeadingColor={mainHeadingColor}>
                      Saved Videos
                    </SavedVideoHeading>
                  </SavedLogoAndHeadingContainer>

                  <SavedVideoList>
                    {savedVideos.map(eachVideo => (
                      <SavedVideoCard
                        savedVideoDetails={eachVideo}
                        key={eachVideo.id}
                      />
                    ))}
                  </SavedVideoList>
                </div>
              ) : (
                <NoSavedVideosContainer bgColor={bgColor}>
                  <NoSavedVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideoHeading headingText={headingText}>
                    No saved videos found
                  </NoSavedVideoHeading>
                  <NoSavedVideoNote noteText={noteText}>
                    You can save your videos while watching them
                  </NoSavedVideoNote>
                </NoSavedVideosContainer>
              )}
            </SavedVideosContainer>
          </SideNavbarAndSavedVideosContainer>
        </>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)
export default SavedVideosRoute
