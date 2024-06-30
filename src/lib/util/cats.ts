type ImageObject = {
	src: string;
	alt: string;
};

const catAltText = [
	[
		'Cukuriņš stareee~',
		'Battle mode Cukuriņš',
		'The bite of Cukuriņš',
		'Cukuriņš hunting rabbit',
		'Cukuriņš Tucked-in',
		'Sleepy Cukuriņš',
		'Scared Cukuriņš',
		'Cukuriņš in a bowl',
		'Vampire Cukuriņš',
		'Fighter Cukuriņš',
		'Cukuriņš with a toy',
		'Gamer Cukuriņš'
	],
	[
		'Just Dasha',
		'The elagance of Dasha',
		'Grumpy pet Dasha',
		'Eepyy Dasha',
		'Bff Dasha',
		'Programmer Dasha (sleepy)',
		'Dashas culinary genius',
		'Dasha stareee~',
		'Vampire dashriņš',
		'Classic cat',
		'OMG Dasha in a box!',
		'Death stare Dasha'
	]
];

async function importCatImages(catName: string) {
	const catImages: ImageObject[] = [];

	for (let i = 1; i <= 12; i++) {
		// Dynamically construct the image path
		const imagePath: string = `../images/cats/${catName}/${i}.jpg`;

		// Dynamically import the image
		const imageModule = await import(/* @vite-ignore */ imagePath);
		const imageSrc: string = imageModule.default;
		if (imageSrc.includes('@fs')) {
			return null;
		}

		// Create an object with the src and alt description
		const imageObject: ImageObject = {
			src: imageSrc,
			alt: catAltText[catName === 'cukurins' ? 0 : 1][i - 1]
		};

		catImages.push(imageObject);
	}

	return catImages;
}

export default importCatImages;
