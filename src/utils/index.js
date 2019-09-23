const fs = require("fs");
const CURR_DIR = process.cwd();
const chalk = require("chalk");

function createProjectContents(templatePath, newProjectPath) {
  createDirectoryContents(templatePath, newProjectPath);
}

module.exports = {
  createProjectContents
};

// PRIVATE
function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      if (file === ".npmignore") file = ".gitignore";
      const contents = fs.readFileSync(origFilePath, "utf8");
      const writePath = filePath(newProjectPath, file);
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      const templateFilePath = `${templatePath}/${file}`;
      const projectFilePath = `${newProjectPath}/${file}`;
      try {
        fs.mkdirSync(projectFilePath);
      } catch(e) {

      }
      createDirectoryContents(templateFilePath, projectFilePath);
    }
  });
}

function filePath(newProjectPath, file) {
  return `${newProjectPath}/${file}`;
}
