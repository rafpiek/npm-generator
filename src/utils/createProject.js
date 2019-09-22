const util = require('util');
const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const logger = require('../logger');
const utils = require('../utils');
const projectTypes = require('../projectTypes');
const rimraf = require('rimraf');
const { projectNameSlug } = require('../utils/helpers');
module.exports = (
  projectName,
  templatePath,
  projectPath,
  command,
  callback,
  projectChoice,
  args = null
) => {
  let creator = null;
  logger('info', args);
  logger('info', command);
  if (args) {
    logger('info', 'here');
    creator = spawn(command, args);
  }

  creator.stdout.on('data', data => {
    logger('info', data);
  });
  creator.stderr.on('data', data => {
    logger('warning', data);
  });
  creator.on('close', data => {
    logger('warning', 'Close: ' + data);
  });
  creator.on('disconnect', data => {
    logger('warning', 'Disconnect: ' + data);
  });
  creator.on('message', data => {
    logger('warning', data);
  });
  creator.on('error', error => {
    logger('error', error);
    rimraf.sync(projectPath);
  });
  creator.on('exit', data => {
    logger('info', 'Exit: + ' + data.toString());
    callback();
    utils.createProjectContents(templatePath, projectPath);
    logger('error', projectChoice);
    installDependencies(projectPath, projectChoice);
  });

  // exec(command, (error, stdout, stderr) => {
  //   logger("info", stdout);
  //   if (!error) {
  //     callback();
  //     utils.createProjectContents(templatePath, projectPath);
  //     installDependencies(projectPath);
  //   } else {
  //     logger("error", error);
  //     logger("error", stderr);
  //     rimraf.sync(projectPath);
  //   }
  // });
};

function installDependencies(projectPath, projectName) {
  logger('success', projectName);
  logger('info', 'Installing dependencies. Please wait...');
  exec(
    `npm --prefix ${projectPath} install -s ${projectTypes[
      projectName
    ].dependencies.join(' ')} ${projectPath}`,
    (error, stdout, stderr) => {
      if (error) {
        logger('error', error);
      } else {
        logger('info', stdout);
        logger('info', stderr);
        installDevDependencies(projectPath, projectName);
      }
    }
  );
}

function installDevDependencies(projectPath, projectName) {
  logger('info', 'Installing devDependencies. Please wait...');

  exec(
    `npm --prefix ${projectPath} install --save-dev ${projectTypes[
      projectName
    ].devDependencies.join(' ')} ${projectPath}`,
    (error, stdout, stderr) => {
      if (error) {
        logger('error', error);
      } else {
        logger('info', stdout);
        logger('info', stderr);
        spawn(process.env.SHELL, { cwd: projectPath, stdio: 'inherit' });
        logger('success', 'Project setup finished! ENJOY!');
      }
    }
  );
}
