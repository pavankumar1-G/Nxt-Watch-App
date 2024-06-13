import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeAndSavedVideosContext from '../../context/ThemeAndSavedVideosContext'

import {
  NxtWatchAppContainer,
  FormContainer,
  ImageLogo,
  InputContainer,
  LoginBtn,
  ErrorMsg,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    // console.log(username)
    const url = 'https://apis.ccbp.in/login'
    const userCredentials = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const loginResponse = await fetch(url, options)
    const loginData = await loginResponse.json()
    // console.log(loginResponse)
    if (loginResponse.ok === true) {
      this.onSubmitSuccess(loginData.jwt_token)
    } else {
      this.onSubmitFailure(loginData.error_msg)
    }
  }

  renderUsernameField = isLightTheme => {
    const {username} = this.state

    const labelTextColor = isLightTheme ? '#424242' : '#ffffff'
    const inputTextColor = isLightTheme ? '#909090' : '#cccccc'
    const borderColor = isLightTheme ? '#cccccc' : '#94a3b8'
    return (
      <>
        <InputLabel htmlFor="username" labelTextColor={labelTextColor}>
          USERNAME
        </InputLabel>
        <UserInput
          id="username"
          type="text"
          value={username}
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Username"
          inputTextColor={inputTextColor}
          borderColor={borderColor}
        />
      </>
    )
  }

  renderPasswordField = isLightTheme => {
    const labelTextColor = isLightTheme ? '#424242' : '#ffffff'
    const inputTextColor = isLightTheme ? '#909090' : '#cccccc'
    const checkboxTextColor = isLightTheme ? '#212121' : '#ffffff'
    const borderColor = isLightTheme ? '#cccccc' : '#94a3b8'

    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password" labelTextColor={labelTextColor}>
          PASSWORD
        </InputLabel>
        <UserInput
          id="password"
          type={inputType}
          value={password}
          name="password"
          placeholder="Password"
          onChange={this.onChangeHandler}
          inputTextColor={inputTextColor}
          borderColor={borderColor}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onChangeCheckbox}
          />
          <CheckboxLabel
            htmlFor="checkbox"
            checkboxTextColor={checkboxTextColor}
          >
            Show Password
          </CheckboxLabel>
        </CheckboxContainer>
      </>
    )
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const bgColor = isLightTheme ? '#f1f1f1' : '#231f20'
          const loginFormBgColor = isLightTheme ? '#ffffff' : '#000000'
          const boxShadow = isLightTheme ? '#d4d2d2' : 'none'
          const websiteLogo = isLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <NxtWatchAppContainer bgColor={bgColor}>
              <FormContainer
                onSubmit={this.onSubmitForm}
                loginFormBgColor={loginFormBgColor}
                boxShadow={boxShadow}
              >
                <ImageLogo src={websiteLogo} alt="website logo" />
                <InputContainer>
                  {this.renderUsernameField(isLightTheme)}
                </InputContainer>
                <InputContainer>
                  {this.renderPasswordField(isLightTheme)}
                </InputContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {showErrorMsg && <ErrorMsg>* {errorMsg}</ErrorMsg>}
              </FormContainer>
            </NxtWatchAppContainer>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}
export default LoginRoute
