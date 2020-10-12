import styled from "styled-components"
import { ButtonProps } from "."

export const Button = styled.button<ButtonProps>`
  height: 40px;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 20px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.3);

  background-color: ${({ kind, outlined }) => {
    if (outlined) return "white"

    switch (kind) {
      case "info":
        return "#327FA6"
      case "danger":
        return "#f25565"
      default:
        return "#327FA6"
    }
  }};

  border: ${({ kind, outlined }) => {
    if (!outlined) return "none"

    switch (kind) {
      case "info":
        return "2px solid #327FA6"
      case "danger":
        return "2px solid #f25565"
      default:
        return "2px solid #327FA6"
    }
  }};

  color: ${({ kind, outlined }) => {
    if (!outlined) return "white"

    switch (kind) {
      case "info":
        return "#327FA6"
      case "danger":
        return "#f25565"
      default:
        return "#327FA6"
    }
  }};
`
