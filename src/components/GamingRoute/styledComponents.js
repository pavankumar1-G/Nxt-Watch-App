import styled from 'styled-components'

export const SideNavbarAndGamingVideosContainer = styled.div`
  display: flex;
`
export const GamingVideosContainer = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 100vh;
`
