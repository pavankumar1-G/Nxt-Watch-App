import {SiYoutubegaming} from 'react-icons/si'

import GamingVideoCard from '../GamingVideoCard'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  GamingVideosList,
  GamingLogoAndHeadingContainer,
  GamingLogoContainer,
  GamingHeading,
} from './styledComponents'

const GamingVideos = props => {
  const {gamingVideos} = props
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const gameIconBgColor = isLightTheme ? '#cbd5e1' : '#0f0f0f'
        const logoAndHeadingBgColor = isLightTheme ? '#f4f4f4' : '#212121'
        const headingtextColor = isLightTheme ? '#231f20' : '#ffffff'
        return (
          <>
            <GamingLogoAndHeadingContainer
              logoAndHeadingBgColor={logoAndHeadingBgColor}
            >
              <GamingLogoContainer gameIconBgColor={gameIconBgColor}>
                <SiYoutubegaming size={28} color="#ff0b37" />
              </GamingLogoContainer>
              <GamingHeading headingtextColor={headingtextColor}>
                Gaming
              </GamingHeading>
            </GamingLogoAndHeadingContainer>
            <GamingVideosList>
              {gamingVideos.map(eachVideo => (
                <GamingVideoCard
                  gamingVideoDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </GamingVideosList>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default GamingVideos
