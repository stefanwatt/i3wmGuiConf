<script lang="ts">
  import Keys from "./keys.svelte";
  import type { keybinding } from "./store";
  export let keybinding: keybinding;
</script>


<tr>
  <td>
    <Keys keys={keybinding.keys} />
  </td>
  <td>{keybinding.cmd}</td>
  <td>Blue</td>
</tr>
