import { Item } from "core/types"
import { BsGiftFill } from "react-icons/bs"

import * as S from "./styles"

interface Props {
  item: Item
  onAddOwner?: (id?: string) => void
}

export function CheckItem({ item, onAddOwner }: Props) {
  function handleAddOwner() {
    if (onAddOwner) onAddOwner(item.id)
  }

  return (
    <S.Container>
      <S.Name>{item.name}</S.Name>
      <S.OwnerContainer>
        {item.owner && (
          <S.Owner>
            <BsGiftFill size={24} color="#F25565" /> {item.owner}
          </S.Owner>
        )}
        {!item.owner && (
          <S.UpdateOwnerButton onClick={handleAddOwner}>
            {"QUERO DAR ESSE PRESENTE"}
          </S.UpdateOwnerButton>
        )}
      </S.OwnerContainer>
    </S.Container>
  )
}
