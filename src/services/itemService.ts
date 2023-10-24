import { Item } from "@/types/models";
import { database } from "@/utils/firebase";
import { ref, set, child, remove, onValue, push, DataSnapshot } from 'firebase/database';

function getItemsRef() {
  return ref(database, "items");
}

export function addItem(item: Item) {
  return push(getItemsRef(), item)
}

export function getItems(
  callback: (snapshot: DataSnapshot) => void
) {
  onValue(getItemsRef(), callback)
}

export function setItem(item: Item) {
  return set(child(getItemsRef(), item.id || ""), item)
}

export function removeItem(itemId: string){
  return remove(child(getItemsRef(), itemId))
}
