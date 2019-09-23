const createProject = require('../utils/createProject')
const logger = require('../logger')
const rimraf = require('rimraf')

// vue create --preset templatePath/vuepreset -b vuetest
module.exports = (projectName, templatePath, projectPath) => {
  const command = `vue`
  const args = ['create', `--preset`, `${templatePath}/vuepreset`, `-b`, `${projectName}`]
  const callback = () => {
    // rimraf.sync(`${projectPath}/src`);
  }
  logger('success', 'Creating vue app')
  createProject(
    projectName,
    templatePath,
    projectPath,
    command,
    callback,
    'vue',
    args
  )
};
