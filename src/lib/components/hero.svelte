<script>
    export let name = '';
    export let intro = '';
    // export let url = '';
    export let socials = {};
</script>

<div class="flex justify-center h-full relative">
    <div class="absolute left-0 left-20 top-1/3 z-50">
        <ul class="menu w-16 py-3 bg-base-100 rounded-box">
            {#each socials as social }
                <li>
                    <a href="{social.socialUrl}" alt="{social.socialName}" target="__blank">
                        <img src={social.svgImage.url} alt={social.socialName} class="">
                    </a>
                </li>
            {/each}
        </ul>
    </div>

    <div class="pt-60">
        <h1 class="text-3xl mb-4 font-bold tracking-wider">Hey there. I'm {name}</h1>
        <h2 class="text-xl mb-4">I’m a software developer</h2>
        <p class="text-xl mb-4">{@html intro}</p>
    </div>
</div>