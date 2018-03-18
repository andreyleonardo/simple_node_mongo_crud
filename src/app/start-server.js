import ServerConfig from './config/server-config';

const server = new ServerConfig().setupServer();

server.start();
