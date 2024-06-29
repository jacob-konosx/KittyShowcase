type ImageObject = {
	src: string,
	alt: string
};

async function importCatImages(catName: string) {
	const catImages: ImageObject[] = [];

	for (let i = 1; i <= 12; i++) {
		// Dynamically construct the image path
		const imagePath: string = `../images/cats/${catName}/${i}.jpg`;

		// Dynamically import the image
		const imageModule = await import(imagePath);
		const imageSrc: string = imageModule.default;
		if (imageSrc.includes('@fs')) {
			return null;
		}

		// Create an object with the src and alt description
		const imageObject: ImageObject = {
			src: imageSrc,
			alt: `${catName} - Photo ${i}`
		};

		catImages.push(imageObject);
	}

	return catImages;
}

export default importCatImages;
