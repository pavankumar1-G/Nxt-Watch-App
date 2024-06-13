import {HiFire} from 'react-icons/hi'

import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  TrendingVideoList,
  TrendingLogoAndHeadingContainer,
  TrnedingLogoContainer,
  TrendingHeading,
} from './styledComponents'

const TrendingVideos = props => {
  const {trendingVideos} = props
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const trendIconBgColor = isLightTheme ? '#cbd5e1' : '#0f0f0f'
        const logoAndHeadingBgColor = isLightTheme ? '#f4f4f4' : '#212121'
        const headingtextColor = isLightTheme ? ' #231f20' : '#ffffff'
        return (
          <>
            <TrendingLogoAndHeadingContainer
              logoAndHeadingBgColor={logoAndHeadingBgColor}
            >
              <TrnedingLogoContainer trendIconBgColor={trendIconBgColor}>
                <HiFire size={30} color="#ff0b37" />
              </TrnedingLogoContainer>
              <TrendingHeading headingtextColor={headingtextColor}>
                Trending
              </TrendingHeading>
            </TrendingLogoAndHeadingContainer>
            <TrendingVideoList>
              {trendingVideos.map(eachVideo => (
                <TrendingVideoCard
                  trendingVideosDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </TrendingVideoList>
          </>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}
export default TrendingVideos
