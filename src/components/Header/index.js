import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  HeaderContainer,
  HeaderLogo,
  ThemeAndMenuContainer,
  ThemeBtn,
  ProfileIcon,
  LogoutBtn,
  NavbarLink,
  LogoutPopupContainer,
  LogoutQuestions,
  LogoutButtonContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconBtn,
} from './styledComponents'

const Header = props => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isLightTheme, onTaggleTheme} = value
      const logoutBgColor = isLightTheme ? '#ffffff' : '#231f20'
      const textBorderColor = isLightTheme ? ' #3b82f6' : '#f9f9f9'
      const qsTextColor = isLightTheme ? '#00306e' : '#ebebeb'
      const popupBgColor = isLightTheme ? '#ffffff' : '#0f0f0f'
      const headerBgColor = isLightTheme ? '#ffffff' : '#313131'
      const btnBorderColor = isLightTheme ? '#cccccc' : '#94a3b8'
      const btnTextColor = isLightTheme ? '#cccccc' : '#94a3b8'

      const onChangeThemeBtn = () => {
        onTaggleTheme()
      }
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer headerBgColor={headerBgColor}>
          <NavbarLink to="/">
            <HeaderLogo
              src={
                isLightTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </NavbarLink>
          <ThemeAndMenuContainer>
            <ThemeBtn
              type="button"
              onClick={onChangeThemeBtn}
              data-testid="theme"
            >
              {isLightTheme ? (
                <BsMoon size={30} />
              ) : (
                <BsBrightnessHigh size={30} color="#ffffff" />
              )}
            </ThemeBtn>
            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutBtn
                  type="button"
                  logoutBgColor={logoutBgColor}
                  textBorderColor={textBorderColor}
                >
                  Logout
                </LogoutBtn>
              }
            >
              {close => (
                <LogoutPopupContainer popupBgColor={popupBgColor}>
                  <LogoutQuestions qsTextColor={qsTextColor}>
                    Are you sure you want to logout?
                  </LogoutQuestions>
                  <LogoutButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      btnTextColor={btnTextColor}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </LogoutButtonContainer>
                </LogoutPopupContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutIconBtn type="button" aria-label="logout">
                  <FiLogOut
                    size={25}
                    color={isLightTheme ? '#231f20' : '#ffffff'}
                  />
                </LogoutIconBtn>
              }
            >
              {close => (
                <LogoutPopupContainer popupBgColor={popupBgColor}>
                  <LogoutQuestions qsTextColor={qsTextColor}>
                    Are you sure, you want to logout?
                  </LogoutQuestions>
                  <LogoutButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      btnTextColor={btnTextColor}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </LogoutButtonContainer>
                </LogoutPopupContainer>
              )}
            </Popup>
          </ThemeAndMenuContainer>
        </HeaderContainer>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)
export default withRouter(Header)
