<script>
	import img1 from '$lib/images/cats/dash/1.jpg';
	import img2 from '$lib/images/cats/dash/2.jpg';
	import img3 from '$lib/images/cats/dash/3.jpg';
	import img4 from '$lib/images/cats/dash/4.jpg';
	import img5 from '$lib/images/cats/dash/5.jpg';
	import img6 from '$lib/images/cats/dash/6.jpg';
	import img7 from '$lib/images/cats/dash/7.jpg';
	import img8 from '$lib/images/cats/dash/8.jpg';
	import img9 from '$lib/images/cats/dash/9.jpg';
	import img10 from '$lib/images/cats/dash/10.jpg';
	import img11 from '$lib/images/cats/dash/11.jpg';
	import img12 from '$lib/images/cats/dash/12.jpg';

	import { onMount } from "svelte";
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	const galleryID = 'dasha-gallery';

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			showHideAnimationType: 'fade',
			initialZoomLevel: 'fit',
			secondaryZoomLevel: 'fill',
			pswpModule: () => import('photoswipe'),
		});
		lightbox.init();
	})

	const images = [
	{scr: img1, alt: 'Just Dasha'},
	{scr: img2, alt: 'The elagance of Dasha'},
	{scr: img3, alt: 'Grumpy pet Dasha'},
	{scr: img4, alt: 'Eepyy Dasha'},
	{scr: img5, alt: 'Bff Dasha'},
	{scr: img6, alt: 'Programmer Dasha (sleepy)'},
	{scr: img7, alt: 'Dashas culinary genius'},
	{scr: img8, alt: 'Dasha stareee~'},
	{scr: img9, alt: 'Vampire dashriņš'},
	{scr: img10, alt: 'Classic cat'},
	{scr: img11, alt: 'OMG Dasha in a box!'},
	{scr: img12, alt: 'Death stare Dasha'},];

	const catName = 'Dasha';
</script>

<svelte:head>
	<title>
		{catName}
	</title>
	<meta name="description" content='This page is a showcase of the adorable cat named "{catName}".' />
</svelte:head>

<section>
	<h1>
		{catName}
	</h1>
<!-- data-pswp-width={image.width}
          data-pswp-height={image.height} -->
	<div class="gallery pswp-gallery" id={galleryID}>
		{#each images as image}
			<div class="gallery-div">
				 <a
				href={image.scr}
				target="_blank"
				rel="noreferrer"
				data-pswp-width=4000
          		data-pswp-height=3000
				>
					<img src={image.scr} alt={image.alt} />
					<p>{image.alt}</p>
				</a>
					<!-- <CatImage scr={i.scr} alt={i.alt}/>
					<p>{i.alt}</p> -->
			</div>
		{/each}
	</div>

</section>

<style>
	h1 {
		width: 100%;
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
