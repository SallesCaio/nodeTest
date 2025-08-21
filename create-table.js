import { sql } from "./db.js";

async function createTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS videos (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      duration INTEGER
    );
  `;
  console.log("Tabela 'videos' criada com sucesso!");
}

createTable();
