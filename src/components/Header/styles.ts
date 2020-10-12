import styled from "styled-components"

interface StarWrapperProps {
  top?: string
  bottom?: string
  right?: string
  left?: string
}

export const HeaderContainer = styled.header`
  background-color: #de9ba2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`

export const CoupleName = styled.div`
  padding: 12px 0;
  display: flex;
  align-items: center;

  > span {
    font-size: 22px;
    color: #8a6365;
  }
`

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 24px;

  margin-top: 20px;

  > span {
    font-size: 50px;
  }
`

export const StartWrapper = styled.div<StarWrapperProps>`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
`
