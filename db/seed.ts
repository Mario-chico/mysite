import { Views, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Views).values([
		{slug: 'resistencia', count: 2},
		
	])
}
