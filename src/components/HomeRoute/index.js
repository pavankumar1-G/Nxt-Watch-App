import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import ThemeAndSavedVideosContext from '../../NxtWatchContext/ThemeAndSavedVideosContext'
import Header from '../Header'
import SideNavbarMenu from '../SideNavbarMenu'
import HomeVideos from '../HomeVideos'
import AllFailureViews from '../AllFailureViews'

import {
  SideNavbarAndHomeContainer,
  HomeContainer,
  BannerContainer,
  BannerContent,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerCloseBtn,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  LoaderContainer,
} from './styledComponents'

const apiContantsStateOfHome = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class HomeRoute extends Component {
  state = {
    searchInput: '',
    bannerDisplay: 'flex',
    homeVideos: [],
    apiStatus: apiContantsStateOfHome.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiContantsStateOfHome.inProgress})
    const {searchInput} = this.state
    const homeUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const homeResponse = await fetch(homeUrl, options)
    if (homeResponse.ok) {
      const homeData = await homeResponse.json()
      console.log(homeData)
      const updatedHomeData = homeData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        homeVideos: updatedHomeData,
        apiStatus: apiContantsStateOfHome.success,
      })
    } else {
      this.setState({apiStatus: apiContantsStateOfHome.failure})
    }
  }

  onClickBannerClose = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onClickSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderHomeLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeSuccessView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderHomeFailureView = () => <AllFailureViews onRetry={this.onRetry} />

  renderHomeRouteVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiContantsStateOfHome.inProgress:
        return this.renderHomeLoadingView()
      case apiContantsStateOfHome.success:
        return this.renderHomeSuccessView()
      case apiContantsStateOfHome.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const textColor = isLightTheme ? '#f9f9f9' : '#231f20'
          const homeBgColor = isLightTheme ? '#f9f9f9' : '#181818'
          const banDisplay = bannerDisplay === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <SideNavbarAndHomeContainer>
                <SideNavbarMenu />
                <HomeContainer homeBgColor={homeBgColor} data-testid="home">
                  <BannerContainer banDisplay={banDisplay} data-testid="banner">
                    <BannerContent>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContent>
                    <BannerCloseBtn
                      type="button"
                      onClick={this.onClickBannerClose}
                      data-testid="close"
                    >
                      <AiOutlineClose size={30} />
                    </BannerCloseBtn>
                  </BannerContainer>

                  <SearchContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      placeholder="Search"
                      onClick={this.onClickSearchInput}
                      textColor={textColor}
                    />
                    <SearchIconButton
                      type="button"
                      onClick={this.getSearchResults}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch size={30} />
                    </SearchIconButton>
                  </SearchContainer>
                  {this.renderHomeRouteVideos()}
                </HomeContainer>
              </SideNavbarAndHomeContainer>
            </>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default HomeRoute
