import Hapi from 'hapi';
import appConfig from './app-config';
import getBooks from '../controllers/books-controller';
import routeBuilder from '../rest/route-builder';

class ServerConfig {
  constructor() {
    this.server = new Hapi.Server({
      host: appConfig.app.host,
      port: appConfig.app.port
    });
    this.server.app = appConfig.app;
  }

  setupServer() {
    return this
      .setRoutePrefixURL()
      .registerPlugins()
      .createRoutes()
      .server;
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
  }

}

const serverListener = new ServerConfig().setupServer().listener;

export { serverListener };

export default ServerConfig;
