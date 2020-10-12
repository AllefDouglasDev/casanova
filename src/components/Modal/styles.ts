import styled from "styled-components"

interface ContainerProps {
  open?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);

  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`

export const Body = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  margin: 20px;
`

export const Header = styled.header`
  display: flex;
`

export const CloseButton = styled.a`
  cursor: pointer;
`

export const TextContainer = styled.div`
  padding-right: 10px;
`

export const Title = styled.h1`
  font-size: 16px;
  padding-bottom: 8px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`

export const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
`

export const SaveTitle = styled.span`
  font-size: 15px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 6px;

  button {
    width: 100%;

    &:first-child {
      margin-right: 10px;
    }
  }
`

export const Input = styled.input`
  height: 40px;
  font-size: 16px;
  width: 100%;

  margin: 20px 0;
  padding-left: 10px;
  padding-right: 10px;

  border-color: #327fa6;

  &:focus {
    border-color: #327fa6;
  }
`
