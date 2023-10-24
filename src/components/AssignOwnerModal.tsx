import * as Dialog from "@radix-ui/react-dialog";
import { BsGiftFill } from "react-icons/bs";
import { Button } from "./Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Input } from "./Input";
import { MdClose } from "react-icons/md";

type AssignOwnerModalProps = {
  title: string;
  onAnonymous: VoidFunction;
  onName: (name: string) => void;
};

export const AssignOwnerModal = ({
  title,
  onName,
  onAnonymous,
}: AssignOwnerModalProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleName = () => {
    if (!name) return;
    onName(name);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="w-full">Quero dar esse presente</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 fixed inset-0" />
        <Dialog.Content
          className={twMerge([
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-full p-2 rounded max-w-md",
            "bg-white focus:outline-none",
          ])}
        >
          <Dialog.Title className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 font-semibold text-2xl">
              <BsGiftFill size={20} color="#F25565" /> {title}
            </div>
            <Dialog.Close>
              <MdClose color="gray" size={25} />
            </Dialog.Close>
          </Dialog.Title>
          <div>
            <span className="mt-4">
              Digite seu nome ou clique em {'"Anônimo"'} para que seu nome não
              apareça
            </span>
            <Input
              autoFocus
              className="my-4"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Salvar como:</span>
            <div className="flex gap-2 mt-2">
              <Button className="w-full" outlined onClick={onAnonymous}>
                Anônimo
              </Button>
              <Button className="w-full" onClick={handleName} disabled={!name}>
                Meu Nome
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
