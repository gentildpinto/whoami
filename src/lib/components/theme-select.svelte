<script context="module">
    export const load = async () => {
      const theme = await Promise.all([
        document.getElementsByTagName("html")[0].getAttribute("data-theme"),
      ])
  
      return {
        props: {
          theme,
        },
      }
    }
</script>

<script>
    export let theme
</script>

<div>

    {#if theme === 'dark'}
        <button data-toggle-theme="light" data-act-class="ACTIVECLASS">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </button>
    {:else if theme === 'light'}
        <button data-toggle-theme="dark" data-act-class="ACTIVECLASS">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </button>
    {/if}

    <select
    data-choose-theme
    class="select select-bordered select-primary w-full max-w-3xl text-xl"
  >
    <option disabled="disabled" selected="selected"
      >Choose a theme</option
    >
    <option value="dark">Dark</option>
    <option value="light">Light</option>
  </select>
</div>
