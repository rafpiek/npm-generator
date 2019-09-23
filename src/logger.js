const projectTypes = require("./projectTypes");
const chalk = require("chalk");

function logger(type, message) {
  const projectNames = Object.keys(projectTypes).map(
    project => projectTypes[project].name
  );
  let messageBody = message;
  if (projectNames.includes(message)) {
    messageBody = composeMessage(message);
  }
  const log = logTypes[type](messageBody);
  console.log(log);
}

module.exports = logger;

function composeMessage(projectType) {
  switch (projectType) {
    case projectTypes.npmProject.name:
      return "Creating npm project, please wait...";
      break;
    case projectTypes.createReactApp.name:
      return "Creating React app with create-react-app, please wait...";
      break;
    case projectTypes.reactNativeInit.name:
      return "Creating ReactNative app with react-native init, please wait ...";
    case projectTypes.expressWithJwt.name:
      return "Creating Express.js app with JWT authorization, please wait..."
      break
    case projectTypes.expressChat.name:
      return "Creating Express.js app with socket.io, please wait..."
      break
    case projectTypes.vue.name:
      return 'Creating vue app with vuex and router, please wait....'
      break
    default:
      return "";
  }
}

const logTypes = {
  info: text => chalk.blue(text),
  success: text => chalk.green(text),
  warning: text => chalk.yellow(text),
  error: text => chalk.red(text)
};
