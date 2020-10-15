import { CheckItem, Header, Modal } from "components"
import { useEffect, useState } from "react"
import { BiBed } from "react-icons/bi"
import { MdKitchen } from "react-icons/md"
import { FaShower } from "react-icons/fa"
import { GiSofa } from "react-icons/gi"
import { getItems, setItem } from "services/item.service"
import * as S from "../../assets/styles/items/styles"
import { Item } from "core/types"

export default function Items() {
  const [items, setItems] = useState<Item[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [currentItem, setCurrentItem] = useState<Item>()

  function byName(a: Item, b: Item) {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }

    return 0
  }

  const kitchenItems = items
    .filter((item) => item.category === "cozinha")
    .sort(byName)
  const bathroomItems = items
    .filter((item) => item.category === "banheiro")
    .sort(byName)
  const bedroomItems = items
    .filter((item) => item.category === "quarto")
    .sort(byName)
  const roomItems = items
    .filter((item) => item.category === "sala")
    .sort(byName)

  function handleModalOpen() {
    setModalOpen(true)
  }

  function handleModalClose() {
    setModalOpen(false)
  }

  function handleAddOwner(item: Item) {
    setModalTitle(item.name)
    setCurrentItem(item)
    handleModalOpen()
  }

  function handleAnonymous() {
    handleModalClose()
    updateOwner("Anônimo")
  }

  function handleMyName(myName: string) {
    if (myName.length < 2) {
      return alert('Informe seu nome ou clique em "Anônimo"')
    }

    handleModalClose()
    updateOwner(myName)
  }

  function updateOwner(ownerName: string) {
    if (!currentItem) return

    if (ownerName.length < 2) {
      return alert('Informe seu nome ou clique em "Anônimo"')
    }

    const newItem: Item = {
      ...currentItem,
      owner: ownerName,
    }

    setItem(newItem)
  }

  useEffect(() => {
    getItems((snapshot) => {
      if (!snapshot.val()) return

      const itemList: Item[] = []

      Object.keys(snapshot.val()).forEach((key) => {
        const currentItem = snapshot.val()[key] as Item

        itemList.push({
          id: key,
          name: currentItem.name,
          owner: currentItem.owner,
          category: currentItem.category,
        })
      })

      setItems(itemList)
    })
  }, [])

  return (
    <S.Container>
      <Header />

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        title={modalTitle}
        onAnonymous={handleAnonymous}
        onMyName={handleMyName}
      />

      <S.ListsWrapper>
        <S.ItemList>
          <S.IconWrapper>
            <GiSofa size={90} color="#327FA6" />
            <h1>Sala</h1>
          </S.IconWrapper>

          <S.Separator />

          {roomItems.map((item) => (
            <CheckItem
              key={item.id}
              item={item}
              onAddOwner={() => handleAddOwner(item)}
            />
          ))}
        </S.ItemList>

        <S.ItemList>
          <S.IconWrapper>
            <BiBed size={90} color="#327FA6" />
            <h1>Quarto</h1>
          </S.IconWrapper>

          <S.Separator />

          {bedroomItems.map((item) => (
            <CheckItem
              key={item.id}
              item={item}
              onAddOwner={() => handleAddOwner(item)}
            />
          ))}
        </S.ItemList>

        <S.ItemList>
          <S.IconWrapper>
            <FaShower size={90} color="#327FA6" />
            <h1>Banheiro</h1>
          </S.IconWrapper>

          <S.Separator />

          {bathroomItems.map((item) => (
            <CheckItem
              key={item.id}
              item={item}
              onAddOwner={() => handleAddOwner(item)}
            />
          ))}
        </S.ItemList>

        <S.ItemList>
          <S.IconWrapper>
            <MdKitchen size={90} color="#327FA6" />
            <h1>Cozinha</h1>
          </S.IconWrapper>

          <S.Separator />

          {kitchenItems.map((item) => (
            <CheckItem
              key={item.id}
              item={item}
              onAddOwner={() => handleAddOwner(item)}
            />
          ))}
        </S.ItemList>
      </S.ListsWrapper>
    </S.Container>
  )
}
