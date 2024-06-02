import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import ThemeAndSavedVideosContext from './NxtWatchContext/ThemeAndSavedVideosContext'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import AllVideosView from './components/AllVideosView'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isLightTheme: true,
    savedVideos: [],
    existingTab: 'Home',
  }

  onTaggleTheme = () => {
    this.setState(prevState => ({isLightTheme: !prevState.isLightTheme}))
  }

  onChangeTab = tab => {
    this.setState({existingTab: tab})
  }

  onSaveVideo = video => {
    const {savedVideos} = this.state
    const indexForSimilarVideo = savedVideos.findIndex(
      eachVideo => eachVideo.id === video.id,
    )
    if (indexForSimilarVideo === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(indexForSimilarVideo, 1)
      this.setState({savedVideos})
    }
  }

  onRemoveVideo = id => {
    const {savedVideos} = this.state

    const updatedFilterVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedFilterVideos})
  }

  render() {
    const {isLightTheme, savedVideos, existingTab} = this.state
    return (
      <ThemeAndSavedVideosContext.Provider
        value={{
          isLightTheme,
          savedVideos,
          existingTab,
          onTaggleTheme: this.onTaggleTheme,
          onChangeTab: this.onChangeTab,
          onSaveVideo: this.onSaveVideo,
          onRemoveVideo: this.onRemoveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute exact path="/videos/:id" component={AllVideosView} />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndSavedVideosContext.Provider>
    )
  }
}

export default App
