module.exports = () => {
  const YAML = require("yamljs");
  const fs = require("fs");
  const files = fs.readdirSync("./src/handlers");

  const merged = files
    .map((f) => fs.readFileSync(`./src/handlers/${f}`, "utf8"))
    .map((raw) => YAML.parse(raw))
    .reduce((result, handler) => Object.assign(result, handler), {});

  return merged;
};
