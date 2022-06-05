<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
import { activeTab } from "./lib/store";
import Tabs from "./lib/tabs.svelte";
import Banner from "./lib/banner.svelte";

  const writeConfigFile = async () => {
    await invoke("write_config_file");
    alert("done!");
  };
</script>

<main class="font-mono">


    <Banner/>
<div class="flex justify-center py-2">
    <Tabs/>
</div>
<div class="p-4 flex justify-center items-center">
  <div>
    <svelte:component this={$activeTab.component} />
    <p class="my-2"></p>
    <button
      on:click={writeConfigFile}
      class="p-2 bg-indigo-500 text-white rounded-md"
    >
      write file
    </button>
  </div>
</div>
</main>
