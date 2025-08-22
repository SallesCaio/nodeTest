import fastify from "fastify";
import cors from "@fastify/cors";
import { DatabasePostgres } from "./database-postgres";
import { Video } from "./frontend/src/types/Video";

const server = fastify();

await server.register(cors, { origin: "*" });

const database = new DatabasePostgres();

server.get("/", async () => {
  return { message: "Server is running 🚀" };
});

server.post<{ Body: Omit<Video, "id"> }>("/videos", async (request, reply) => {
  const video = await database.create(request.body);
  return reply.status(201).send(video);
});

server.get<{ Querystring: { search?: string } }>("/videos", async (request) => {
  const search = request.query.search;
  return await database.list(search);
});

server.put<{ Params: { id: string }; Body: Omit<Video, "id"> }>(
  "/videos/:id",
  async (request, reply) => {
    await database.update(request.params.id, request.body);
    return reply.status(204).send();
  }
);

server.delete<{ Params: { id: string } }>("/videos/:id", async (request, reply) => {
  await database.delete(request.params.id);
  return reply.status(204).send();
});

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

server
  .listen({ port, host: "0.0.0.0" })
  .then(() => console.log(`Server running on port ${port}`))
  .catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
  });
