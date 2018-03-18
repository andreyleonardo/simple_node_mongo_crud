process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

process.on('unhandledRejection', (err) => {
  throw err;
});
const commandParams = 2;
const jest = require('jest');

const argv = process.argv.slice(commandParams);
const command = [];

if (argv.includes('--component')) {
  command.push('"test/component"');
} else if (argv.includes('--unit')) {
  command.push('"test/unit"');
} else {
  command.push('"/"');
}

if (argv.includes('--watch')) {
  command.push('--watch');
}

if (argv.includes('--coverage')) {
  command.push('--coverage');
}

jest.run(command.join(' '));
