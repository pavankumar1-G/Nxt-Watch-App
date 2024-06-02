import React from 'react'

const ThemeAndSavedVideosContext = React.createContext({
  isLightTheme: true,
  savedVideos: [],
  existingTab: 'Home',
  onTaggleTheme: () => {},
  onChangeTab: () => {},
  onSaveVideo: () => {},
  onRemoveVideo: () => {},
})
export default ThemeAndSavedVideosContext
