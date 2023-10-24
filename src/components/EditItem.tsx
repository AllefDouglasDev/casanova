import { setItem } from "@/services/itemService";
import { Item } from "@/types/models";
import { PASSWORD, CATEGORIES } from "@/utils/consts";
import { FormEvent, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

type EditItemProps = {
  item: Item;
  onClose: VoidFunction;
};

export const EditItem = ({ item, onClose }: EditItemProps) => {
  const [name, setName] = useState(item.name);
  const [owner, setOwner] = useState(item.owner);
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState(item.category);
  const [errorMessage, setErrorMessage] = useState("");

  const showErrorMessage = (text: string) => {
    setErrorMessage(text);
    setTimeout(() => setErrorMessage(""), 2500);
  };

  const handleEditItem = async (event: FormEvent) => {
    event.preventDefault();
    if (!name) {
      return showErrorMessage("Nome do item não pode ser vazio");
    }
    if (password !== PASSWORD) {
      return showErrorMessage("Senha inválida");
    }
    try {
      await setItem({ id: item.id, name, owner, category });
      onClose();
    } catch (error) {
      showErrorMessage("Erro ao salvar item");
    }
  };

  return (
    <form className="flex flex-col gap-2 p-2" onSubmit={handleEditItem}>
      <Input
        id="name"
        label="Nome do item"
        placeholder="Nome do item"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        id="owner"
        label="Quem está presenteando?"
        placeholder="Nome da pessoa"
        type="text"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <label htmlFor="categories">Selecione uma categoria:</label>
      <select
        className="border p-1 rounded h-[40px] capitalize"
        name="categories"
        id="categories"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((categoryName) => (
          <option key={categoryName} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>
      <Input
        id="password"
        label="Senha"
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span className="text-red-600 py-1">{errorMessage}</span>
      <div className="flex gap-2">
        <Button className="w-full" kind="danger" outlined type="button" onClick={onClose}>
          Cancelar
        </Button>
        <Button className="w-full" type="submit">
          Salvar
        </Button>
      </div>
    </form>
  );
};
