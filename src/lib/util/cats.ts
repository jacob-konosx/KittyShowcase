type ImageObject = {
	src: string;
	alt: string;
};

const catInfo = [
	{
		name: 'cukurins',
		altText: [
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
		]
	},
	{
		name: 'dasha',
		altText: [
			'Just Dasha',
			'The elagance of Dasha',
			'Grumpy pet Dasha',
			'Eepyy Dasha',
			'Bff Dasha',
			'Programmer Dasha (sleepy)',
			'Dashas culinary genius',
			'Dasha stareee~',
			'Box stare dasha',
			'Classic cat',
			'OMG Dasha in a box!',
			'Death stare Dasha'
		]
	}
];

async function importCatImages(catName: string) {
	// Determine the cat index
	const catIndex = catInfo.findIndex((cat) => cat.name === catName);

	// Check if the catName is valid
	if (catIndex === -1) {
		return null;
	}

	const catImages: ImageObject[] = [];

	for (let i = 1; i <= 12; i++) {
		// Dynamically construct the image path
		const imageSrc: string = `/images/cats/${catName}/${i}.jpg`;

		// Create an object with the src and alt description
		const imageObject: ImageObject = {
			src: imageSrc,
			alt: catInfo[catIndex].altText[i - 1]
		};

		catImages.push(imageObject);
	}

	return catImages;
}

export default importCatImages;
