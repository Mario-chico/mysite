import type { APIRoute } from "astro";
import { set } from "astro/zod";
import {db, Views, sql, eq } from 'astro:db';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const slug = params.get('slug');

  if(!slug){
    return new Response('No hay de ese', {status: 404});
  }

  let item;
  try {
    const views = await db
      .select({
        count: Views.count,
      })
      .from(Views)
      .where(eq(Views.slug, slug));

    item = await db
      .insert(Views)
      .values({
        slug: slug,
        count: 1,
      })
      .onConflictDoUpdate({
        target: Views.slug,
        set: { 
          count: sql`count + 1`,
        },
      })
      .returning({
        slug: Views.slug,
        count: Views.count,
      })
      .then((res: any[]) => res[0]);
  }catch(err){
    item = {slug, count: 1};
  }

  return new Response(JSON.stringify(item), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
