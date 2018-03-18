import env from 'dotenv';

let instance = null;
const defaultPort = 3000;

const loadEnvVarsFromFile = () => {
  env.config();
};

class Config {
  constructor() {
    if (!instance) {
      loadEnvVarsFromFile();

      instance = this;

      this.createAppConfig();
    }

    return instance;
  }

  createAppConfig() {
    this.app = {
      host: process.env.NODE_HOST || 'localhost',
      name: 'Simple Crud',
      port: process.env.NODE_PORT || defaultPort,
      prefixURL: '/simple-crud'
    };
  }
}

export default new Config();
