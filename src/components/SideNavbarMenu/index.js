import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  NavbarMenuContainer,
  NavbarMenuContent,
  NavOptions,
  NavbarMenuItemLink,
  NavbarMenuItemContainer,
  NavbarText,
  ContactInfoContainer,
  ContactHeading,
  ContactIconsContainer,
  ContactIcons,
  ContactNoteWish,
} from './styledComponents'

class SideNavbarMenu extends Component {
  renderSideNavbarMenu = () => (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isLightTheme, existingTab, onChangeTab} = value
        const navbarContainerBgColor = isLightTheme ? '#ffffff' : '#313131'
        const existingTabBgColor = isLightTheme ? '#e2e8f0' : ' #606060'
        const textColor = isLightTheme ? '#231f20' : '#f1f1f1'

        const onClickHomeTab = () => {
          onChangeTab('Home')
        }
        const onClickGamingTab = () => {
          onChangeTab('Gaming')
        }
        const onClickTrendingTab = () => {
          onChangeTab('Trending')
        }
        const onClickSavedVideosTab = () => {
          onChangeTab('SavedVideos')
        }
        return (
          <NavbarMenuContainer navbarContainerBgColor={navbarContainerBgColor}>
            <NavbarMenuContent>
              <NavOptions>
                <NavbarMenuItemLink to="/">
                  <NavbarMenuItemContainer
                    key="home"
                    onClick={onClickHomeTab}
                    bgColor={
                      existingTab === 'Home' ? existingTabBgColor : 'none'
                    }
                  >
                    <AiFillHome
                      size={25}
                      color={existingTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavbarText textColor={textColor}>Home</NavbarText>
                  </NavbarMenuItemContainer>
                </NavbarMenuItemLink>

                <NavbarMenuItemLink to="/trending">
                  <NavbarMenuItemContainer
                    key="trending"
                    onClick={onClickTrendingTab}
                    bgColor={
                      existingTab === 'Trending' ? existingTabBgColor : 'none'
                    }
                  >
                    <HiFire
                      size={25}
                      color={existingTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavbarText textColor={textColor}>Trending</NavbarText>
                  </NavbarMenuItemContainer>
                </NavbarMenuItemLink>

                <NavbarMenuItemLink to="/gaming">
                  <NavbarMenuItemContainer
                    key="gaming"
                    onClick={onClickGamingTab}
                    bgColor={
                      existingTab === 'Gaming' ? existingTabBgColor : 'none'
                    }
                  >
                    <SiYoutubegaming
                      size={25}
                      color={existingTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavbarText textColor={textColor}>Gaming</NavbarText>
                  </NavbarMenuItemContainer>
                </NavbarMenuItemLink>

                <NavbarMenuItemLink to="/saved-videos">
                  <NavbarMenuItemContainer
                    key="saved"
                    onClick={onClickSavedVideosTab}
                    bgColor={
                      existingTab === 'SavedVideos'
                        ? existingTabBgColor
                        : 'none'
                    }
                  >
                    <CgPlayListAdd
                      size={25}
                      color={
                        existingTab === 'SavedVideos' ? '#ff0b37' : '#909090'
                      }
                    />
                    <NavbarText textColor={textColor}>Saved videos</NavbarText>
                  </NavbarMenuItemContainer>
                </NavbarMenuItemLink>
              </NavOptions>
            </NavbarMenuContent>

            <ContactInfoContainer>
              <ContactHeading textColor={textColor}>CONTACT US</ContactHeading>
              <ContactIconsContainer>
                <ContactIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIconsContainer>
              <ContactNoteWish textColor={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ContactNoteWish>
            </ContactInfoContainer>
          </NavbarMenuContainer>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )

  render() {
    return <>{this.renderSideNavbarMenu()}</>
  }
}
export default SideNavbarMenu
