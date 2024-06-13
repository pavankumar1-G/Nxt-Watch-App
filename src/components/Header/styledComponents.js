import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.headerBgColor};
`
export const HeaderLogo = styled.img`
  width: 90px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 40px;
  }
`
export const ThemeAndMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 40%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  margin: 5px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin: 18px;
  }
  @media screen and (min-width: 576px) {
    margin: 15px;
  }
`
export const ProfileIcon = styled.img`
  width: 30px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
  @media screen and (min-width: 576px) {
    margin: 15px;
  }
`
export const LogoutBtn = styled.button`
  display: none;
  @media screen and (min-width: 768px){
    display: inline;
    margin: 18px;
    background: none;
    border: 1.5px solid ${props => props.textBorderColor};
    background-color: 'transparent';
    color: ${props => props.textBorderColor};
    height: 36px;
    width: 100px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
  @media screen and (min-width: 576px) {
    margin: 15px;
  }
`
export const LogoutPopupContainer = styled.div`
  background-color: ${props => props.popupBgColor};
  height: 200px;
  width: 220px;
  border-radius: 10px;
  display: flex:
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 420px;
  }
`
export const LogoutQuestions = styled.p`
  color: ${props => props.qsTextColor};
  text-align: center;
  padding-top: 40px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    text-align: center;
    font-size: 30px;
  }
`
export const LogoutButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`
export const CloseButton = styled.button`
  height: 30px;
  width: 70px;
  margin-right: 10px;
  border: 1px solid ${props => props.btnBorderColor};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.btnTextColor};
  font-weight: bold;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 100px;
    margin-right: 15px;
    font-size: 15px;
  }
`
export const ConfirmButton = styled.button`
  height: 30px;
  width: 70px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 100px;
    margin-left: 15px;
    font-size: 15px;
  }
`
export const LogoutIconBtn = styled.button`
  background: none;
  border: none;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavbarLink = styled(Link)`
  text-decoration: none;
`
