const createProject = require('../utils/createProject')
const logger = require('../logger')
const rimraf = require('rimraf')
const fs = require('fs')

module.exports = (projectName, templatePath, projectPath) => {
  // const command = `npm`
  // const args = ['init', '-y']
  const callback = () => {
    rimraf.sync(`${projectPath}/src`);
    fs.mkdirSync(projectPath)
    fs.mkdirSync(`${projectPath}/src`);
    logger('info', 'Express with JWT callback')
  }

  logger('success', 'Creating Express app')
  createProject(
    projectName,
    templatePath,
    projectPath,
    null,
    callback,
    'expressWithJwt',
    []
  )
}
