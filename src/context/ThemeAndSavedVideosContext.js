import React from 'react'

const ThemeAndSavedVideosContext = React.createContext({
  isLightTheme: true,
  savedVideos: [],
  existingTab: 'Home',
  onTaggleTheme: () => {},
  onChangeTab: () => {},
  onSavedAndUnsavedVideo: () => {},
  onRemoveVideo: () => {},
})
export default ThemeAndSavedVideosContext
