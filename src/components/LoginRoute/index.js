import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

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

  onChangeUserHandler = event => {
    this.setState({username: event.target.value})
    // console.log({[event.target.name]:event.target.value})
  }

  onChangePasswordHandler = event => {
    this.setState({password: event.target.value})
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
    console.log(username)
    const url = 'https://apis.ccbp.in/login'
    const userCredentials = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const loginResponse = await fetch(url, options)
    const loginData = await loginResponse.json()
    console.log(loginResponse)
    if (loginResponse.ok === true) {
      this.onSubmitSuccess(loginData.jwt_token)
    } else {
      this.onSubmitFailure(loginData.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          id="username"
          type="text"
          value={username}
          onChange={this.onChangeUserHandler}
          name="username"
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          id="password"
          type={inputType}
          value={password}
          placeholder="Password"
          name="password"
          onChange={this.onChangePasswordHandler}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onChangeCheckbox}
          />
          <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
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
      <NxtWatchAppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <ImageLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginBtn type="submit">Login</LoginBtn>
          {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </FormContainer>
      </NxtWatchAppContainer>
    )
  }
}
export default LoginRoute
