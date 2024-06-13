import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import GamingVideos from '../GamingVideos'
import Header from '../Header'
import SideNavbarMenu from '../SideNavbarMenu'
import AllFailureViews from '../AllFailureViews'

import {
  SideNavbarAndGamingVideosContainer,
  GamingVideosContainer,
  LoaderContainer,
} from './styledComponents'

const apiConstantStateOfGaming = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {gamingVideos: [], apiStatus: apiConstantStateOfGaming.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiConstantStateOfGaming.inProgress})
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const gamingOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const gamingResponse = await fetch(gamingUrl, gamingOptions)
    // console.log(gamingResponse)
    if (gamingResponse.ok) {
      const gamingData = await gamingResponse.json()
      // console.log(gamingData)
      const updatedGamingData = gamingData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      // console.log(updatedGamingData)
      this.setState({
        gamingVideos: updatedGamingData,
        apiStatus: apiConstantStateOfGaming.success,
      })
    } else {
      this.setState({apiStatus: apiConstantStateOfGaming.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingSuccessView = () => {
    const {gamingVideos} = this.state
    return <GamingVideos gamingVideos={gamingVideos} />
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <AllFailureViews onRetry={this.onRetry} />

  renderGamingVideoList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstantStateOfGaming.inProgress:
        return this.renderLoadingView()
      case apiConstantStateOfGaming.success:
        return this.renderGamingSuccessView()
      case apiConstantStateOfGaming.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isLightTheme} = value

          const bgColor = isLightTheme ? '#f9f9f9 ' : '#0f0f0f'

          return (
            <>
              <Header />
              <SideNavbarAndGamingVideosContainer>
                <SideNavbarMenu />
                <GamingVideosContainer bgColor={bgColor} data-testid="gaming">
                  {this.renderGamingVideoList()}
                </GamingVideosContainer>
              </SideNavbarAndGamingVideosContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}
export default GamingRoute
