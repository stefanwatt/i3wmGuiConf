import { derived, writable } from "svelte/store";
  import Keybindings from "./keybindings.svelte";
  import General from "./general.svelte";
  import Startup from "./startup.svelte";
  import Appearance from "./appearance.svelte";
import type { SvelteComponentDev } from "svelte/internal";

export type Tab = {
  id:number;
  text:string;
  component:any;
}
export const tabs:Tab[]=[
  {id:0,text:"General",component:General},
  {id:1,text:"Keybindings",component:Keybindings},
  {id:2,text:"Appearance",component:Appearance},
  {id:3,text:"Startup",component:Startup},
]
export const activeTab = writable(tabs[1])
