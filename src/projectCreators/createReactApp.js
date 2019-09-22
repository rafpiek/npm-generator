const createProject = require('../utils/createProject');
const logger = require('../logger');
const rimraf = require('rimraf');

module.exports = (projectName, templatePath, projectPath) => {
  const command = `create-react-app ${projectName}`;
  const callback = () => {
    rimraf.sync(`${projectPath}/src`);
  };
  createProject(
    projectName,
    templatePath,
    projectPath,
    command,
    callback,
    'createReactApp'
  );
};
