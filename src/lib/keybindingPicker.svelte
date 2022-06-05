<script lang="ts">
  let keys = [];
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

  const addBinding = () => {};

  const reset = () => {
    keys = [];
  };

  const MODS = [
    { key: "Super", substitution: "Super" },
    { key: "Shift", substitution: "Shift" },
    { key: "Control", substitution: "Ctrl" },
    { key: "Alt", substitution: "Alt" },
  ];

  const isMod = (key) => !!MODS.find(mod => mod.key.toLowerCase() === key.toLowerCase());

  const substituteIfMod = (key) => {
    if (!isMod(key)) return key;
    const { substitution } = MODS.find((mod) => mod.key.toLowerCase() === key.toLowerCase());
    return substitution;
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
      <div class="mt-2 flex justify-center">
        {#each keys as key, i }
          <kbd class="kbd">{substituteIfMod(key)}</kbd>
          <span class="flex mx-1 justify-center items-center">
            {i < keys.length - 1 ? "+" : ""}
          </span>
        {/each}
      </div>
    </div>
    <div class="modal-action">
      <button on:click={showPicker} class="btn btn-primary">add</button>
      <label for="my-modal" class="btn btn-secondary">cancel</label>
    </div>
  </div>
</div>
