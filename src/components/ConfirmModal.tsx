import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { Input } from "./Input";
import { Button } from "./Button";
import { PASSWORD } from "@/utils/consts";

type ConfirmModalProps = {
  title: ReactNode;
  defaultPassword?: string;
  onConfirm: () => void
  children: ReactNode;
};

export const ConfirmModal = ({
  title,
  defaultPassword,
  onConfirm,
  children,
}: ConfirmModalProps) => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState(defaultPassword || "");
  const [error, setError] = useState("");

  const handleCancel = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    if (password === PASSWORD) {
      onConfirm();
      setOpen(false);
    } else {
      setError("Senha inválida.");
      setTimeout(() => setError(""), 2500);
    }
  }

  useEffect(() => {
    setPassword(defaultPassword || '');
  }, [defaultPassword])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
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
              {title}
            </div>
            <Dialog.Close>
              <MdClose color="gray" size={25} />
            </Dialog.Close>
          </Dialog.Title>
          <div>
            <Input
              autoFocus
              type="password"
              label="Senha"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <span className="mt-3 text-red-600">{error}</span>              
            )}
            <div className="flex gap-2 mt-2">
              <Button className="w-full" outlined onClick={handleCancel}>
                Cancelar
              </Button>
              <Button className="w-full" onClick={handleConfirm}>
                Confirmar
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
