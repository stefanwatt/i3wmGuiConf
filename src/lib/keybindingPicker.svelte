<script lang="ts">
  import { get } from "svelte/store";

  import Keybinding from "./keybinding.svelte";
  import { isMod, substituteIfMod } from "./mods";
  import { keybindings } from "./store";

  let keys = [];
  $: substitutedKeys = keys.map((key) => substituteIfMod(key));
  $: duplicateBindingError = !!(get(keybindings).find((binding) =>
    binding.keys.every((key) => keys.includes(key))
  ));
  let showAddKeybindingModal = false;
  let isBindingComplete = false;

  const showPicker = () => {
    showAddKeybindingModal = false;
  };

  const onKeyUp = (event: KeyboardEvent) => {
    isBindingComplete = true;
  };

  const onKeyDown = (event: KeyboardEvent) => {
    //TODO debug shift + alt = meta
    event.preventDefault();
    if (isBindingComplete) {
      reset();
      isBindingComplete = false;
    }
    if (!isMod(event.key)) {
      isBindingComplete = true;
    }
    keys = [...keys, event.key.toUpperCase()];
  };

  const focusInput = (node: HTMLInputElement) => {
    //TODO dirty hack -> should probably do it differently
    setTimeout(() => {
      node.focus();
    }, 100);
  };

  const addBinding = () => {
    if (keys.length === 0) return;
    keybindings.update((old) => [{ cmd: "none", keys }, ...old]);
    reset()
  };

  const reset = () => {
    keys = [];
  };
</script>

<label for="my-modal" class="btn btn-primary modal-button">add keybinding</label
>
<input
  bind:checked={showAddKeybindingModal}
  type="checkbox"
  id="my-modal"
  class="modal-toggle"
/>
<div class:modal-open={showAddKeybindingModal} class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Add new Keybinding:</h3>
    <p>Press some keys...</p>
    <div class="p-2">
      {#if showAddKeybindingModal}
        <input
          use:focusInput
          on:keydown={onKeyDown}
          on:keyup={onKeyUp}
          class="input input-ghost w-full"
          type="text"
        />
      {/if}
      <div class="my-4" />
      <Keybinding keys={substitutedKeys} />
    </div>
    {#if duplicateBindingError}
    <p class="text-red-500">Error: duplicate binding</p>
    {/if}
    <div class="modal-action">
      <button disabled={duplicateBindingError} on:click={addBinding} class="btn btn-primary">add</button>
      <label for="my-modal" class="btn btn-secondary">cancel</label>
    </div>
  </div>
</div>
