import { Button } from "components/Button"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  background-color: white;
  padding: 10px;
  border-radius: 8px;
`

export const Name = styled.span`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 500;
`

export const OwnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    font-weight: 500;
  }
`

export const Owner = styled.span`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`

export const UpdateOwnerButton = styled(Button)`
  width: 100%;
`
