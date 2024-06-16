<script>
	import img1 from '$lib/images/cats/cuk/1.jpg';
	import img2 from '$lib/images/cats/cuk/2.jpg';
	import img3 from '$lib/images/cats/cuk/3.jpg';
	import img4 from '$lib/images/cats/cuk/4.jpg';
	import img5 from '$lib/images/cats/cuk/5.jpg';
	import img6 from '$lib/images/cats/cuk/6.jpg';
	import img7 from '$lib/images/cats/cuk/7.jpg';
	import img8 from '$lib/images/cats/cuk/8.jpg';
	import img9 from '$lib/images/cats/cuk/9.jpg';
	import img10 from '$lib/images/cats/cuk/10.jpg';
	import img11 from '$lib/images/cats/cuk/11.jpg';
	import img12 from '$lib/images/cats/cuk/12.jpg';

	import { onMount } from "svelte";
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	const galleryID = 'cukurins-gallery';

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

	const images = [{scr: img1, alt: 'Cukuriņš stareee~'},
	{scr: img2, alt: 'Battle mode Cukuriņš'},
	{scr: img3, alt: 'The bite of Cukuriņš'},
	{scr: img4, alt: 'Cukuriņš hunting rabbit'},
	{scr: img5, alt: 'Cukuriņš Tucked-in'},
	{scr: img6, alt: 'Sleepy Cukuriņš'},
	{scr: img7, alt: 'Scared Cukuriņš'},
	{scr: img8, alt: 'Cukuriņš in a bowl'},
	{scr: img9, alt: 'Vampire Cukuriņš'},
	{scr: img10, alt: 'Fighter Cukuriņš'},
	{scr: img11, alt: 'Cukuriņš with a toy'},
	{scr: img12, alt: 'Gamer Cukuriņš'},];
</script>

<svelte:head>
	<title>Cukuriņš
	</title>
	<meta name="description" content='This page is a showcase of my cat named "Cukuriņš".' />
</svelte:head>

<section>
	<h1>
		Cukuriņš
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
