import styled from 'styled-components'

export const NxtWatchAppContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const FormContainer = styled.form`
  background-color: ${props => props.loginFormBgColor};
  width: 80%;
  height: 55vh;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px ${props => props.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
`
export const ImageLogo = styled.img`
  width: 150px;
  margin-top: 30px;
  margin-bottom: 20px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LoginBtn = styled.button`
  height: 40px;
  width: 70vw;
  border: none;
  background-color: #3b82f6;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  @media screen and (min-width: 768px) {
    height: 50px;
    font-size: 25px;
  }
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  color: #ff0b37;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const InputLabel = styled.label`
  color: ${props => props.labelTextColor};
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`
export const UserInput = styled.input`
  width: 70vw;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid ${props => props.borderColor};
  padding-left: 10px;
  color: ${props => props.inputTextColor};
  background-color: transparent;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 50px;
    font-size: 20px;
    margin-bottom: 20px;
  }
`
export const CheckboxContainer = styled.div`
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export const Checkbox = styled.input`
  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`
export const CheckboxLabel = styled.label`
  color: ${props => props.checkboxTextColor};
`
