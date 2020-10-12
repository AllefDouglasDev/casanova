import { Button } from "components"
import { Categories } from "core/types"
import Router from "next/router"
import { FormEvent, useState } from "react"
import { addItem } from "services/item.service"
import * as S from "../../../assets/styles/items/new/styles"

const PASSWORD = "reginaldo"

export default function NewItem() {
  const [itemName, setItemName] = useState("")
  const [password, setPassword] = useState("")
  const [category, setCategory] = useState(Categories[0])

  const [message, setMessage] = useState({
    text: "",
    kind: "success",
  })

  function showMessage(text: string, kind = "success") {
    setMessage({ text, kind })

    setTimeout(() => setMessage({ text: "", kind }), 2500)
  }

  function handleGoToList() {
    Router.push("/items")
  }

  async function handleAddNewItem(event: FormEvent) {
    event.preventDefault()

    if (!itemName)
      return showMessage("Nome do item não pode ser vazio", "danger")

    if (password !== PASSWORD) return showMessage("Senha inválida", "danger")

    try {
      await addItem({ name: itemName, owner: "", category })

      setItemName("")

      showMessage("Item adicionado com sucesso")
    } catch (error) {
      showMessage("Erro ao criar item", "danger")
    }
  }

  return (
    <div>
      <S.Form onSubmit={handleAddNewItem}>
        <input
          placeholder="Item"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <label htmlFor="categories">Selecione uma categoria:</label>
        <select
          name="categories"
          id="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Categories.map((c, index) => (
            <option key={String(index)} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          placeholder="senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Adicionar</Button>

        <S.Message kind={message.kind}>{message.text}</S.Message>
      </S.Form>

      <S.GoToListWrapper>
        <Button onClick={handleGoToList} kind="danger" outlined>
          LISTA DE ITEMS
        </Button>
      </S.GoToListWrapper>
    </div>
  )
}
