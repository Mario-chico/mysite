import type { APIRoute } from "astro";
import {db, Fmvs, gte } from 'astro:db';
export const prerender = false;
export const GET: APIRoute = async () => {
  try{
    const fechaLimite = new Date();
    fechaLimite.setDate(fechaLimite.getDate() - 30);
    const fechaLimiteISO = fechaLimite.toISOString().split('T')[0];
    const registros = await db.select().from(Fmvs)
                              .where(gte(Fmvs.fecha, fechaLimiteISO))
                              .orderBy(Fmvs.fecha);
                              
    return new Response(JSON.stringify(registros), {status: 200});
  }catch(error){
    console.error('Error al obtener los registros:', error);
    return new Response(JSON.stringify({error: 'Error al obtener los registros'}), {status: 500});
  }
}