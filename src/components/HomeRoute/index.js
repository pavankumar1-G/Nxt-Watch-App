import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideNavbarMenu from '../SideNavbarMenu'
import HomeVideos from '../HomeVideos'
import AllFailureViews from '../AllFailureViews'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

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
    bannerVisible: 'flex',
    searchInput: '',
    apiStatus: apiContantsStateOfHome.initial,
    homeVideos: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickBannerClose = () => {
    this.setState({bannerVisible: 'none'})
  }

  onClickSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiContantsStateOfHome.inProgress})
    const {searchInput} = this.state
    const homeUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const token = Cookies.get('jwt_token')
    const homeOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const homeResponse = await fetch(homeUrl, homeOptions)
    // console.log(homeResponse)
    if (homeResponse.ok) {
      const homeData = await homeResponse.json()
      // console.log(homeData)
      const updatedHomeData = homeData.videos.map(eachData => ({
        id: eachData.id,
        title: eachData.title,
        thumbnailUrl: eachData.thumbnail_url,
        name: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
        viewCount: eachData.view_count,
        publishedAt: eachData.published_at,
      }))
      // console.log(updatedHomeData)
      this.setState({
        apiStatus: apiContantsStateOfHome.success,
        homeVideos: updatedHomeData,
      })
    } else {
      this.setState({apiStatus: apiContantsStateOfHome.failure})
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <AllFailureViews onRetry={this.onRetry} />

  renderHomeRouteVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiContantsStateOfHome.inProgress:
        return this.renderLoadingView()
      case apiContantsStateOfHome.success:
        return this.renderSuccessView()
      case apiContantsStateOfHome.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {bannerVisible, searchInput} = this.state
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const homeBgColor = isLightTheme ? '#f9f9f9' : '#181818'
          const searchButtonBgColor = isLightTheme ? '#f9f9f9' : '#424242'
          const searchTextColor = isLightTheme ? '#424242' : '#e2e8f0'
          return (
            <>
              <Header />
              <SideNavbarAndHomeContainer>
                <SideNavbarMenu />
                <HomeContainer homeBgColor={homeBgColor} data-testid="home">
                  <BannerContainer banner={bannerVisible} data-testid="banner">
                    <BannerContent>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      {bannerVisible !== 'none' ? (
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                      ) : null}
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContent>
                    <BannerCloseBtn
                      type="button"
                      data-testid="close"
                      onClick={this.onClickBannerClose}
                      aria-label="close"
                    >
                      <AiOutlineClose size={20} />
                    </BannerCloseBtn>
                  </BannerContainer>

                  <SearchContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      placeholder="Search"
                      onChange={this.onClickSearchInput}
                      searchTextColor={searchTextColor}
                    />
                    <SearchIconButton
                      type="button"
                      onClick={this.getSearchResults}
                      data-testid="searchButton"
                      searchButtonBgColor={searchButtonBgColor}
                    >
                      <AiOutlineSearch size={25} />
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
