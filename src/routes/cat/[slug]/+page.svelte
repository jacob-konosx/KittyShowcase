<script>
    import { page } from '$app/stores';

    import { onMount } from "svelte";
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';

    $: catImages = $page.data.props.catImages;
    $: slug = $page.data.props.slug;

    const galleryID = slug + '-gallery';

    onMount(() => {
            let lightbox = new PhotoSwipeLightbox({
                gallery: '#' + galleryID,
                children: 'a',
                showHideAnimationType: 'fade',
                initialZoomLevel: 'fit',
                secondaryZoomLevel: 'fit',
                pswpModule: () => import('photoswipe'),
            });
            lightbox.init();
        })

</script>

<svelte:head>
	<title>{slug.charAt(0).toUpperCase() + slug.slice(1)} Showcase
	</title>
	<meta name="description" content='This website is a showcase of all of my favorite kitties!' />
</svelte:head>

<section>
	<h1>
		{slug}
	</h1>
	<div class="gallery pswp-gallery" id={galleryID}>
		{#each catImages as image}
			<div class="gallery-div">
				<a
				href={image.src}
				target="_blank"
				rel="noreferrer"
				data-pswp-width=4000
          		data-pswp-height=3000
				>
					<img src={image.src} alt={image.alt} />
					<p>{image.alt}</p>
				</a>
			</div>
		{/each}
	</div>

</section>

<style>
	h1 {
		width: 100%;
	}

    h1::first-letter {
        text-transform: capitalize
    }
	.gallery {
		padding-left: 1rem;
		padding-right: 1rem;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
		position: relative;
	}
	.gallery img {
		aspect-ratio: 4/3;
		max-width: 100%;
		object-fit: cover;
		transition: transform .2s;

		align-content: center;
		object-position: center;
	}

	.gallery img:hover{
		transform:scale(1.1);
		cursor: pointer;
	}
	.gallery-div {
		position: relative;
		max-width: 100%;
	}
	.gallery-div p {
		position: relative;
		text-align: center;
		width: 100%;
	}

	.gallery-div a{
		text-decoration: none;
		color: black;
	}
	@media only screen and (max-width: 800px) {
		.gallery {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			padding-left: 0rem;
			padding-right: 0rem;
		}
	}

</style>
