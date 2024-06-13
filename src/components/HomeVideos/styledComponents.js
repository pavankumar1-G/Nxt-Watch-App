import styled from 'styled-components'

export const HomeVideoList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  min-height: 100vh;
`
export const NoSearchResultsImg = styled.img`
  width: 220px;
  height: 200px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 400px;
  }
`
export const NoSearchResultsHeading = styled.h1`
  font-size: 20px;
  color: ${props => props.noResultsHeadingColor};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const NoSearchResultsNote = styled.p`
  font-size: 15px;
  color: ${props => props.noResultsNoteColor};
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  height: 36px;
  width: 100px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 120px;
    font-size: 15px;
  }
`
