import { ButtonHTMLAttributes } from "react"
import * as S from "./styles"

export interface ButtonProps {
  kind?: "info" | "danger"
  outlined?: boolean
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps

export const Button = ({ kind = "info", outlined, ...props }: Props) => (
  <S.Button kind={kind} outlined={outlined} {...props} />
)
