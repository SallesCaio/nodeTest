import { sql } from "./db.js";
/* 
sql`DROP TABLE IF EXISTS videos;`.then(() => {
  console.log("Tabela 'videos' removida com sucesso!");
}).catch((error) => {
  console.error("Erro ao remover a tabela 'videos':", error);
});
*/
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
