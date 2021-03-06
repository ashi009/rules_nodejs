const fs = require('fs');
const path = require('path');

const packageJsonPath = require.resolve('jsesc').replace('jsesc.js', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

const packageJsonPath2 = packageJsonPath.replace(
    '/e2e_packages_yarn_install_duplicate_for_determinism_testing/', '/e2e_packages_yarn_install/');
const packageJson2 = JSON.parse(fs.readFileSync(packageJsonPath2));

if (packageJsonPath === packageJsonPath2) {
  console.error('expected different json paths');
  process.exitCode = 1;
}
if (JSON.stringify(packageJson) !== JSON.stringify(packageJson2)) {
  console.error(
      'jsesc package.json files from two different yarn_install runs should have the same contents');
  process.exitCode = 1;
}
