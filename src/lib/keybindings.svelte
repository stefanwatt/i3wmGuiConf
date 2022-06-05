<script>
import Keybinding from "./keybinding.svelte";
import KeybindingPicker from "./keybindingPicker.svelte";
import { keybindings } from "./store";
</script>

Keybindings
<KeybindingPicker/>
{#each $keybindings as keybinding}
  <div class="flex items-center border-2 m-1 border-slate-100 p-2">
    <div class="flex items-center mr-2">{keybinding.cmd}</div>  
    <div class="flex items-center">
      <Keybinding keys={keybinding.keys}/> 
    </div>
  </div>
{/each}
