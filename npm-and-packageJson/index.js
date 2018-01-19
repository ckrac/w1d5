var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");

var blueMessage = (chalk.blue("I'm blue"));

var log = console.log;


console.log(message);

console.log(blueMessage);

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));