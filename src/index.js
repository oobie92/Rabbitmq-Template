const app = require('./server');
const { port } = require('./config');

const server = app.listen(port, () => {
    console.log(`Server listening on port:${server.address().port}`)
});