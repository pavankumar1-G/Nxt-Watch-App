import styled from 'styled-components'

export const SideNavbarAndTrendingVideosContainer = styled.div`
  display: flex;
`
export const TrendingVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 70vw;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 100vh;
`
