const inquirer = require("inquirer");
const fs = require("fs");
const QUESTIONS = require("./questions");
const utils = require("./utils");
const CURR_DIR = process.cwd();
const chalk = require("chalk");
const logger = require("./logger");
const projectTypes = require("./projectTypes");
const projectCreators = require("./projectCreators");
const { projectNameSlug } = require("./utils/helpers");

async function generateProject() {
  inquirer.prompt(QUESTIONS).then(async answers => {
    const projectChoice = answers["project-choice"];
    const projectName = answers["project-name"];
    const templatePath = `${__dirname}/templates/${projectChoice}`;
    const projectPath = `${CURR_DIR}/${projectName}`;
    const createParams = [projectName, templatePath, projectPath];
    try {
      logger("info", projectChoice);
      const project = projectNameSlug(projectChoice);
      await projectCreators[project](...createParams);
    } catch (err) {
      if (err.code === "EEXIST") {
        console.log(
          chalk.red("ERROR: Directory with the given name already exists.")
        );
        return;
      } else {
        console.log(chalk.red(err));
      }
    }
  });
}

module.exports = generateProject;
