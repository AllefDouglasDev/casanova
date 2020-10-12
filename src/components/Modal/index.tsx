import { Button } from "components/Button"
import * as S from "./styles"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { BsGiftFill } from "react-icons/bs"
import { useState } from "react"

interface Props {
  open?: boolean
  title?: string
  onClose?: () => void
  onAnonymous?: () => void
  onMyName?: (name: string) => void
}

export const Modal = ({
  open,
  title,
  onClose,
  onAnonymous,
  onMyName,
}: Props) => {
  const [myName, setMyName] = useState("")

  function handleMyName() {
    if (onMyName) {
      onMyName(myName)
    }
  }

  return (
    <S.Container open={open}>
      <S.Body>
        <S.Header>
          <S.TextContainer>
            <S.Title>
              <BsGiftFill size={20} color="#F25565" /> {title}
            </S.Title>

            <S.Description>
              Digite seu nome ou clique em "Anônimo" para que seu nome não
              apareça
            </S.Description>
          </S.TextContainer>

          <S.CloseButton onClick={onClose}>
            <AiOutlineCloseCircle size={25} />
          </S.CloseButton>
        </S.Header>

        <S.Input
          placeholder="Meu nome"
          value={myName}
          onChange={(e) => setMyName(e.target.value)}
        />

        <S.SaveTitle>Salvar como</S.SaveTitle>

        <S.ButtonWrapper>
          <Button onClick={onAnonymous}>ANÔNIMO</Button>
          <Button onClick={handleMyName}>MEU NOME</Button>
        </S.ButtonWrapper>
      </S.Body>
    </S.Container>
  )
}
