import { column, defineDb, defineTable } from 'astro:db';

const Views = defineTable({
  columns: {
    slug: column.text({primaryKey: true}),
    count: column.number({
      default: 1
    }),
  },
});

const Fmvs = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    fecha: column.text(),
    pesoAntesKg: column.number(),
    pesoDespuesKg: column.number(),
    fmvPorcentaje: column.number(),  
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {Views, Fmvs},
});
