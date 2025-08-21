
import fastify from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgree.js'

const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.get('/', async (request, reply) => {
  return { message: "Server is running 🚀" };
});


server.post('/videos', async(request, reply) => {
    const { title, description, duration } = request.body

    await database.create({
        title,
        description,
        duration
    })
        return reply.status(201).send({

    })
})

server.get('/videos', async(request) => {
    const search = request.query.search

    console.log(search)

    const videos = await database.list(search)

    return videos                
})

server.put('/videos/:id', async(request, reply) => {
    const videoId = request.params.id

    const { title, description, duration } = request.body

    await database.update(videoId, {
        title,
        description,
        duration
    })
    
    return reply.status(204).send()
})

server.delete('/videos/:id', async(request, reply) => {
    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send()
})


const port = process.env.PORT ? Number(process.env.PORT) : 3333;

server.listen({ port, host: '0.0.0.0' })
  .then(() => {
    console.log(`Server running on port ${port}`);
  })
  .catch(err => {
    console.error("Error starting server:", err);
    process.exit(1);
  });
