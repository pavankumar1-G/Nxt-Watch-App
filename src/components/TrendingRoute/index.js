import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideNavbarMenu from '../SideNavbarMenu'
import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'
import TrendingVideos from '../TrendingVideos'
import AllFailureViews from '../AllFailureViews'

import {
  SideNavbarAndTrendingVideosContainer,
  TrendingVideosContainer,
  LoaderContainer,
} from './styledComponents'

const apiConstantsStateOfTrending = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {apiStatus: apiConstantsStateOfTrending.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstantsStateOfTrending.inProgress})
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const token = Cookies.get('jwt_token')
    const trendingOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const trendingResponse = await fetch(trendingUrl, trendingOptions)
    // console.log(trendingResponse)
    if (trendingResponse.ok) {
      const trendingData = await trendingResponse.json()
      // console.log(trendingData)
      const updatedTrendingData = trendingData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      // console.log(updatedTrendingData)
      this.setState({
        apiStatus: apiConstantsStateOfTrending.success,
        trendingVideos: updatedTrendingData,
      })
    } else {
      this.setState({apiStatus: apiConstantsStateOfTrending.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessTrendingView = () => {
    const {trendingVideos} = this.state
    // console.log(trendingVideos)

    return <TrendingVideos trendingVideos={trendingVideos} />
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <AllFailureViews onRetry={this.onRetry} />

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstantsStateOfTrending.inProgress:
        return this.renderLoadingView()
      case apiConstantsStateOfTrending.success:
        return this.renderSuccessTrendingView()
      case apiConstantsStateOfTrending.failure:
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

          const bgColor = isLightTheme ? '#f9f9f9' : '#0f0f0f'

          return (
            <>
              <Header />
              <SideNavbarAndTrendingVideosContainer>
                <SideNavbarMenu />
                <TrendingVideosContainer
                  bgColor={bgColor}
                  data-testid="trending"
                >
                  {this.renderTrendingVideos()}
                </TrendingVideosContainer>
              </SideNavbarAndTrendingVideosContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}
export default TrendingRoute
