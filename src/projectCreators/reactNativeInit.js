const createProject = require('../utils/createProject');
const logger = require('../logger');
const rimraf = require('rimraf');

module.exports = (projectName, templatePath, projectPath) => {
  const command = `react-native`;
  const args = ['init', projectName];
  const callback = () => {
    console.log('React native init callback');
  };
  createProject(
    projectName,
    templatePath,
    projectPath,
    command,
    callback,
    'reactNativeInit',
    args
  );
};
