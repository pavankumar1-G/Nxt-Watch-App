import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideNavbarMenu from '../SideNavbarMenu'
import AllVideosPlayingView from '../AllVideosPlayingView'
import AllFailureViews from '../AllFailureViews'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  SideNavbarAndVideoItemContainer,
  VideoItemContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstantsOfVideoItem = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class AllVideosView extends Component {
  state = {
    videoItemDetails: [],
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstantsOfVideoItem.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstantsOfVideoItem.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const videoItemUrl = `https://apis.ccbp.in/videos/${id}`
    const token = Cookies.get('jwt_token')
    const videoItemOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const videoResponse = await fetch(videoItemUrl, videoItemOptions)
    // console.log(videoResponse)
    if (videoResponse.ok) {
      const videoItemData = await videoResponse.json()
      // console.log(videoItemData)
      const updatedVideoItemData = {
        id: videoItemData.video_details.id,
        title: videoItemData.video_details.title,
        videoUrl: videoItemData.video_details.video_url,
        thumbnailUrl: videoItemData.video_details.thumbnail_url,
        name: videoItemData.video_details.channel.name,
        profileImageUrl: videoItemData.video_details.channel.profile_image_url,
        subscriberCount: videoItemData.video_details.channel.subscriber_count,
        viewCount: videoItemData.video_details.view_count,
        publishedAt: videoItemData.video_details.published_at,
        description: videoItemData.video_details.description,
      }

      this.setState({
        videoItemDetails: updatedVideoItemData,
        apiStatus: apiStatusConstantsOfVideoItem.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstantsOfVideoItem.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  updateLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  updateDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => {
    const {videoItemDetails, isLiked, isDisliked} = this.state
    return (
      <AllVideosPlayingView
        videoItemDeta={videoItemDetails}
        updateLiked={this.updateLiked}
        updateDisliked={this.updateDisliked}
        isLiked={isLiked}
        isDisliked={isDisliked}
      />
    )
  }

  onRetry = () => {
    this.getVideoItemDetails()
  }

  renderFailureView = () => <AllFailureViews onRetry={this.onRetry} />

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstantsOfVideoItem.inProgress:
        return this.renderLoadingView()
      case apiStatusConstantsOfVideoItem.success:
        return this.renderSuccessView()
      case apiStatusConstantsOfVideoItem.failure:
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
          const videoItemBgColor = isLightTheme ? ' #f9f9f9 ' : '#0f0f0f'
          return (
            <>
              <Header />
              <SideNavbarAndVideoItemContainer>
                <SideNavbarMenu />
                <VideoItemContainer
                  videoItemBgColor={videoItemBgColor}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoItemDetails()}
                </VideoItemContainer>
              </SideNavbarAndVideoItemContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default AllVideosView
