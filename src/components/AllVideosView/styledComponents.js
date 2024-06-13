import styled from 'styled-components'

export const SideNavbarAndVideoItemContainer = styled.div`
  display: flex;
`
export const VideoItemContainer = styled.div`
  background-color: ${props => props.videoItemBgColor};
  padding: 10px;
  min-height: 100vh;
  width: 70vw;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
