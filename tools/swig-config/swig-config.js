'use strict';

const path = require('path');

const configList = [
    [ 'my-module.i', 'jsb_my_module_auto.cpp' ],
    [ 'another-module.i', 'jsb_another_module_auto.cpp' ],
];

const projectRoot = path.resolve(path.join(__dirname, '..', '..'));
const interfacesDir = path.join(projectRoot, 'tools', 'swig-config');
const bindingsOutDir = path.join(projectRoot, 'native', 'engine', 'common', 'bindings', 'auto');
const includeDirs = [
    path.join(projectRoot, 'native', 'engine', 'common', 'Classes'),
];

module.exports = {
    interfacesDir,
    bindingsOutDir,
    includeDirs,
    configList
};
