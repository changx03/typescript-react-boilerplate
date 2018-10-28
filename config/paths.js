const path = require('path');

// this is the project absolute project root directory
const appDir = path.join(__dirname, '../');

module.exports = {
  appDir,
  appSrc: path.join(appDir, 'src'),
  appJs: path.join(appDir, 'src/app.tsx'),
  appBuild: path.join(appDir, 'dist'),
  appHtml: path.join(appDir, 'public/app.html'),
};
