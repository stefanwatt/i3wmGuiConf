<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";

  const writeConfigFile = async () => {
    await invoke("write_config_file");
    alert("done!");
  };
</script>

<div class="p-4 flex justify-center items-center min-h-screen">
  <button
    on:click={writeConfigFile}
    class="p-2 bg-indigo-500 text-white rounded-md"
  >
    write file
  </button>
</div>
