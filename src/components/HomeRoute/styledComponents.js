import styled from 'styled-components'

export const SideNavbarAndHomeContainer = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.homeBgColor};
  width: 70vw;
  padding-left: 10px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  width: 65vw;
  background-size: cover;
  display: ${props => props.banner};
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 30px;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    width: 68vw;
  }
`
export const BannerContent = styled.div``
export const BannerLogo = styled.img`
  width: 100px;
`
export const BannerText = styled.p`
  font-weight: bold;
`
export const BannerButton = styled.button`
  height: 36px;
  background: none;
  border: 1px solid ' #313131';
  border-radius: 6px;
`
export const BannerCloseBtn = styled.button`
  background: none;
  border: none;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #909090;
  width: 65vw;
  border-radius: 3px;
  justify-content: space-between;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    width: 35vw;
  }
`
export const SearchInput = styled.input`
  border: none;
  background: none;
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
  outline: none;
  width: 100%;
  color: ${props => props.searchTextColor};
`
export const SearchIconButton = styled.button`
  background-color: ${props => props.searchButtonBgColor};
  border: none;
  border-left: 1px solid #909090;
  width: 20%;
  padding: 5px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
