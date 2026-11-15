// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Trango Treks';
export const SITE_TAGLINE = 'Karakoram treks & expeditions';
export const SITE_DESCRIPTION =
	'Guided treks and climbing expeditions in the Karakoram of Gilgit-Baltistan — K2 Base Camp, Gondogoro La, Laila Peak and beyond.';
export const CONTACT_EMAIL = 'hello@example.com'; // TODO: replace with the real booking address

export type Expedition = {
	slug: string;
	name: string;
	region: string;
	days: number;
	maxAltitude: number; // metres
	grade: 'Moderate' | 'Strenuous' | 'Technical';
	season: string;
	summary: string;
	tone: 'dawn' | 'glacier' | 'dusk' | 'night';
};

// Edit this list to change the expeditions shown on the home page.
export const EXPEDITIONS: Expedition[] = [
	{
		slug: 'k2-base-camp',
		name: 'K2 Base Camp & Concordia',
		region: 'Baltoro Glacier',
		days: 21,
		maxAltitude: 5150,
		grade: 'Strenuous',
		season: 'Jun – Aug',
		summary:
			'Walk the length of the Baltoro to Concordia, where K2, Broad Peak and the Gasherbrums stand in one sweep of sky.',
		tone: 'dawn',
	},
	{
		slug: 'gondogoro-la',
		name: 'Gondogoro La Traverse',
		region: 'Baltoro → Hushe',
		days: 23,
		maxAltitude: 5585,
		grade: 'Technical',
		season: 'Jul – Aug',
		summary:
			'Extend the Baltoro trek over a fixed-rope pass and descend into the quiet Hushe valley — a true Karakoram crossing.',
		tone: 'glacier',
	},
	{
		slug: 'laila-peak',
		name: 'Laila Peak Expedition',
		region: 'Hushe Valley',
		days: 28,
		maxAltitude: 6096,
		grade: 'Technical',
		season: 'Jun – Sep',
		summary:
			'A striking spear of ice above the Gondogoro glacier. An ideal first six-thousander for climbers with alpine experience.',
		tone: 'dusk',
	},
	{
		slug: 'snow-lake',
		name: 'Biafo – Hispar & Snow Lake',
		region: 'Central Karakoram',
		days: 24,
		maxAltitude: 5151,
		grade: 'Strenuous',
		season: 'Jul – Aug',
		summary:
			'One of the longest glacial systems outside the poles — remote, wild and rarely walked.',
		tone: 'night',
	},
];
