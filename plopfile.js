var componentGenerator = require('./generators/component/index');
var moduleGenerator = require('./generators/module/index');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('module', moduleGenerator);
};