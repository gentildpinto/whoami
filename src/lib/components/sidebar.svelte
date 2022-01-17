<script>
	export let socials;
</script>

<div class="fixed left-20 top-1/3 z-50">
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