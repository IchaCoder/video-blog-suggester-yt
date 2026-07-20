import { env } from "@rag/env/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

const globalForDb = globalThis as typeof globalThis & {
  pool?: Pool;
};

function getPool() {
  if (!globalForDb.pool) {
    globalForDb.pool = new Pool({ connectionString: env.DATABASE_URL });
  }

  return globalForDb.pool;
}

export function createDb() {
  return drizzle(getPool(), { schema });
}

export const db = createDb();
