import Hapi from 'hapi';
import appConfig from './app-config';
import { getBooks } from '../controllers/books-controller';
import routeBuilder from '../rest/route-builder';

class ServerConfig {
  constructor() {
    this.server = new Hapi.Server();
    this.server.app = appConfig.app;
  }

  setupServer() {
    return this
      .createServerConnection()
      .setRoutePrefixURL()
      .registerPlugins()
      .createRoutes()
      .server;
  }

  createServerConnection() {
    this.server.connection({
      host: this.server.app.host,
      port: this.server.app.port
    });

    return this;
  }

  setRoutePrefixURL() {
    this.server.realm.modifiers.route.prefix = this.server.app.prefixURL;

    return this;
  }

  createRoutes() {
    this.server.route(routeBuilder('GET', '/books', getBooks));

    return this;
  }

  registerPlugins() {
    return this;
  }

  async start() {
    try {

      await this.start();

    } catch (err) {

      throw new Error(err);

    }

    console.log('Server running at:', this.info.uri);

  }

}

const serverListener = new ServerConfig().setupServer().listener;

export { serverListener };

export default ServerConfig;
