import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarMenuContainer = styled.div`
  width: 30%;
  background-color: ${props => props.navbarContainerBgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
export const NavbarMenuContent = styled.div``
export const NavOptions = styled.ul`
  padding-left: 10px;
`
export const NavbarMenuItemLink = styled(Link)`
  text-decoration: none;
`
export const NavbarMenuItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 5px;
  }
`
export const NavbarText = styled.p`
  margin: 5px;
  width: 100px;
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 200px;
  }
`
export const ContactInfoContainer = styled.div`
  padding: 10px;
`
export const ContactHeading = styled.p`
  font-size: 15px;
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const ContactIconsContainer = styled.div``
export const ContactIcons = styled.img`
  width: 20px;
  margin: 5px;
  @media screen and (min-width: 768px) {
    width: 40px;
  }
`
export const ContactNoteWish = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: ${props => props.textColor};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
