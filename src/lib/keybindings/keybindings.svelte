<script>
  import Keybinding from "./keybinding.svelte";
  import KeybindingPicker from "./keybindingPicker.svelte";
  import { keybindings } from "./store";
</script>

Keybindings
<KeybindingPicker />
<div class="my-4"></div>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Keys</th>
          <th>Command</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
{#each $keybindings as keybinding}
        <Keybinding {keybinding} />
{/each}
      </tbody>
    </table>
  </div>

