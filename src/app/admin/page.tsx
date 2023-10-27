"use client";

import { AdminItemList } from "@/components/AdminItemList";
import { CreateItem } from "@/components/CreateItem";
import { useState } from "react";

export default function Admin() {
  const [passwordInput, setPasswordInput] = useState<string>();

  return (
    <div className="w-full h-full bg-gray-100">
      <p className="w-full py-4 text-2xl text-center text-gray-600">
        Criar novo item
      </p>
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-lg flex flex-col gap-4 mb-20">
          <CreateItem onPasswordChange={setPasswordInput} />
          <hr />
          <AdminItemList passwordInput={passwordInput} />
        </div>
      </div>
    </div>
  );
}
