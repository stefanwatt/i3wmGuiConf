import { writable } from "svelte/store";

export type keybinding = {
  keys:string[];
  cmd:string
}
export const keybindings = writable<keybinding[]>([
  {keys:["Super","t"],cmd:"Open Terminal"}
])
