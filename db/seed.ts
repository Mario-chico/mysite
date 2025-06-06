import { Views, Fmvs, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Views).values([
		{slug: 'resistencia', count: 2,},
		
	]);
	await db.insert(Fmvs).values([
		{fecha: '2025-06-05', pesoAntesKg: 63.15, pesoDespuesKg: 62.9, fmvPorcentaje: 0.4},
		{fecha: '2025-06-04', pesoAntesKg: 62.8, pesoDespuesKg: 62.55, fmvPorcentaje: 0.4},
  
  
	])
}
