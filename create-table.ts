import { sql } from "./db";

async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      duration INTEGER
    );
  `;
  console.log("Tabela 'videos' criada com sucesso!");
}

createTable();
