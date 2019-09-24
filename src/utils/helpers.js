function projectNameSlug(projectName) {
  return projectName
    .split("-")
    .map((text, index) => {
      if (index != 0) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
      } else {
        return text;
      }
    })
    .join("");
}

module.exports = {
  projectNameSlug
};
