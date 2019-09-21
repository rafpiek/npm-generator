const util = require("util");
const exec = require("child_process").exec;
const spawn = require("child_process").spawn;
const logger = require("../logger");
const utils = require("../utils");
const projectTypes = require("../projectTypes");

module.exports = (projectName, templatePath, projectPath, command) => {
  exec(command, (error, stdout, stderr) => {
    logger("info", stdout);
    if (!error) {
      utils.createProjectContents(templatePath, projectPath);
      installDependencies(projectPath);
    } else {
      logger("error", error);
      logger("error", stderr);
    }
  });
};

function installDependencies(projectPath) {
  logger("info", "Installing dependencies. Please wait...");
  exec(
    `npm --prefix ${projectPath} install -s ${projectTypes.createReactApp.dependencies.join(
      " "
    )} ${projectPath}`,
    (error, stdout, stderr) => {
      if (error) {
        logger("error", error);
      } else {
        logger("info", stdout);
        logger("info", stderr);
        installDevDependencies(projectPath);
      }
    }
  );
}

function installDevDependencies(projectPath) {
  logger("info", "Installing devDependencies. Please wait...");

  exec(
    `npm --prefix ${projectPath} install --save-dev ${projectTypes.createReactApp.devDependencies.join(
      " "
    )} ${projectPath}`,
    (error, stdout, stderr) => {
      if (error) {
        logger("error", error);
      } else {
        logger("info", stdout);
        logger("info", stderr);
        spawn(process.env.SHELL, { cwd: projectPath, stdio: "inherit" });
        logger("success", "Project setup finished! ENJOY!");
      }
    }
  );
}
