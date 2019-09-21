const fs = require("fs");
const utils = require("../utils");

module.exports = (projectName, templatePath, projectPath) => {
  fs.mkdirSync(projectPath);
  utils.createProjectContents(templatePath, projectPath);
};
