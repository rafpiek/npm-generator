const createProject = require("../utils/createProject");

module.exports = (projectName, templatePath, projectPath) => {
  const command = `create-react-app ${projectName}`;
  createProject(projectName, templatePath, projectPath, command);
};
