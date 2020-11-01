const Hapi = require('@hapi/hapi');
const allPlugins = require('./config/all.plugins');


// MongoosePlugin();
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(allPlugins);

  await server.start();
  console.log('Server running on port 3000');
};

init();
