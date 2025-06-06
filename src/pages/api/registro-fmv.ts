
import type { APIRoute } from "astro";
import {db, Fmvs } from 'astro:db';
export const prerender = false;
export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { kgAntes, kgDespues } = data;

  const KG_TO_LBS = 2.20462;

  const pesoAntesLbs = kgAntes * KG_TO_LBS;
  const pesoDespuesLbs = kgDespues * KG_TO_LBS;
  const pesoOrinaLbs = pesoAntesLbs - pesoDespuesLbs;
  const fmvPorcentaje = (pesoOrinaLbs / pesoAntesLbs) * 100;
  const fechaActual = new Date().toISOString().split('T')[0];

  try{
    await db.insert(Fmvs).values({
      fecha: fechaActual,
      pesoAntesKg: kgAntes,
      pesoDespuesKg: kgDespues,
      fmvPorcentaje: parseFloat(fmvPorcentaje.toFixed(2)),
    })
    return new Response(JSON.stringify({
      message: 'Registro guardado con exito',
      fmv: fmvPorcentaje.toFixed(2)
    }), {status: 200});
  } catch(error){
    console.error('Error al guardar en la base de datos:', error);
    return new Response(JSON.stringify({error: 'Error al guardar en la base de datos'}), {status: 500});
  }
}