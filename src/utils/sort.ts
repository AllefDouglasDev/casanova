import { Item } from "@/types/models";

export function sortByName(a: Item, b: Item) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
