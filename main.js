const { program } = require("commander");
const fs = require("fs");

program
  .option("-i, --input <path>", "path to data.json")
  .option("-o, --output <path>", "path to output file")
  .option("-d, --display", "display results in console");

program.parse(process.argv);

const options = program.opts();
const input = options.input;
const output = options.output;
const display = options.display;

// Перевірка на обов'язковий параметр
if (!input) {
  console.error("Please, specify input file");
  return;
}

// Перевірка на існування файлу
if (!fs.existsSync(input)) {
  console.error("Cannot find input file");
  return;
}

// Якщо жоден необов'язковий параметр не вказано — нічого не робимо
if (!output && !display) {
  return;
}
