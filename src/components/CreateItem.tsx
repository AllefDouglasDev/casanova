"use client";

import { addItem } from "@/services/itemService";
import { FormEvent, useRef, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { PASSWORD, CATEGORIES } from "@/utils/consts";
import Link from "next/link";

type CreateItemProps = {
  onPasswordChange?: (value: string) => void
}

export const CreateItem = ({ onPasswordChange }: CreateItemProps) => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const [itemName, setItemName] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [message, setMessage] = useState({
    text: "",
    kind: "success",
  });

  const showMessage = (text: string, kind = "success") => {
    setMessage({ text, kind });
    setTimeout(() => setMessage({ text: "", kind }), 2500);
  };

  const handleCreateItem = async (event: FormEvent) => {
    event.preventDefault();
    if (!itemName) {
      return showMessage("Nome do item não pode ser vazio.", "danger");
    }
    if (password !== PASSWORD) {
      return showMessage("Senha inválida.", "danger");
    }
    try {
      await addItem({ name: itemName, owner: "", category });
      setItemName("");
      inputNameRef.current?.focus();
      showMessage("Item adicionado com sucesso.");
    } catch (error) {
      showMessage("Erro ao criar item.", "danger");
    }
  };

  return (
    <form className="flex flex-col gap-2 p-2" onSubmit={handleCreateItem}>
      <Input
        ref={inputNameRef}
        id="name"
        label="Nome do item"
        placeholder="Nome do item"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
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
        onChange={(e) => {
          setPassword(e.target.value)
          onPasswordChange?.(e.target.value)
        }}
      />
      {message.text &&<span
        className={
          message.kind === "success" ? "mt-3 text-green-600" : "mt-3 text-red-600"
        }
      >
        {message.text}
      </span>}
      <Button className="mt-4" type="submit">
        Adicionar
      </Button>
      <div className="w-full flex justify-center mt-2">
        <Link href="/">
          <span className="underline text-sm text-sky-400">Ir para tela principal</span>
        </Link>
      </div>
    </form>
  );
};
