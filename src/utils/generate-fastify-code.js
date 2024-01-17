export function generateFastitfyCode() {
    return `const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
    return 'Hello World';
});

const port = process.env.PORT || 3000;

try {
    await fastify.listen(port);
    console.log('Server is running on port ' + port);
} catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
}`;
}