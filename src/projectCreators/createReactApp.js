const createProject = require("../utils/createProject");
const fs = require("fs");

module.exports = (projectName, templatePath, projectPath) => {
  const command = `create-react-app ${projectName}`;
  const callback = () => {};
  createProject(projectName, templatePath, projectPath, command, callback);
};
