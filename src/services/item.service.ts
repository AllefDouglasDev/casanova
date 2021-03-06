import { Item } from "core/types"
import { Database } from "./firebase"

export function addItem(item: Item) {
  return Database.ref("items").push().set(item)
}

export function getItems(
  callback: (snapshot: firebase.database.DataSnapshot) => void
) {
  return Database.ref("items").on("value", callback)
}

export function setItem(item: Item) {
  return Database.ref("items")
    .child(item.id || "")
    .set(item)
}
