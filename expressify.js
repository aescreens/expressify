// Set your watch folder and output file below
const watchFolder = './source/';
const outputFile = './output/ExpressionLib.js';

// Run this script with Node.js & Chokidar
// Install Chokidar with npm: npm install chokidar
// Terminal command: node expressify.js

const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

let watcher = chokidar.watch(watchFolder + '*.js', {
    persistent: true,
    ignoreInitial: false
});

// Map object to store output for each source file
let outputMap = new Map();

watcher.on('add', compileFile);
watcher.on('change', compileFile);
watcher.on('unlink', deleteFile);

function compileFile(filepath) {
    fs.readFile(filepath, 'utf8', function(err, data) {
        if (err) throw err;

        // Convert line breaks to '\r', escape single quotes and wrap each line in single quotes
        // Add an indentation of 4 spaces before each line
        let lines = data.split('\n').map(line => `    '${line.replace(/\r/g, '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")}\\r'`);
        // Remove the last \\r from the final line of the file
        lines[lines.length - 1] = lines[lines.length - 1].replace(/\\r'$/, '\'');
        let converted = lines.join(' +\n');

        // Get variable name from file name
        let varName = path.basename(filepath, '.js');

        // Construct output string
        let output = `    module.${varName} =\n${converted};\n\n`;

        // Store output in Map
        outputMap.set(varName, output);

        // Update output file
        updateOutputFile();
    });
}

function deleteFile(filepath) {
    // Get variable name from file name
    let varName = path.basename(filepath, '.js');

    // Remove output from Map
    outputMap.delete(varName);

    // Update output file
    updateOutputFile();
}

function updateOutputFile() {
    // Write the entire outputMap to ExpressionLib.js, wrapped in the specified module
    let outputFileContent = Array.from(outputMap.values()).join('');
    let wrappedOutput = `var ExpressionLib = (function () {\n    var module = {};\n\n${outputFileContent}    return module;\n})();\n`;
    fs.writeFile(outputFile, wrappedOutput, (err) => {
        if (err) throw err;
        console.log('The file has been updated!');
    });
}