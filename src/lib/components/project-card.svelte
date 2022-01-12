<script>
    export let src = ''
    export let name = ''
    export let slug = ''
    export let description = ''
</script>
  
<div>
    <img {src} alt={name} />
    <a href={`/projects/${slug}`}>
        <div>
            <h2>{name}</h2>
            <p>
                {description.slice(0, 80)}...
            </p>
        </div>
    </a>
</div>
