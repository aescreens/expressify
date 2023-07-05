# Expressify
Expressify is an open-source tool specifically designed for Adobe After Effects script and plugin developers. It converts After Effects Expressions into formatted JavaScript strings which can be used within scripts and plugins.

Expressify handles all the tedious string formatting, allowing you to focus on writing your expressions in the most natural and familiar way.

## Features
- Automatic compilation of JavaScript files on save.
- Auto-update of the output when a source file is modified.
- Removal of a module from the output when the corresponding source file is deleted.
- Handles special character escaping.
- Proper indentation in the output.
- Bundles all scripts into a single JavaScript object.

## How to Use
- Clone or download this repository.
- Install the necessary dependencies using `npm install`.
- Place your After Effects Expression JavaScript files inside the source folder.
- Run `node expressify.js` to start Expressify.
- The compiled output will be available in `output/ExpressionLib.js`.
- Whenever a script inside the scripts folder is updated, a corresponding update will be automatically made in `ExpressionLib.js`.

## Dependencies
Expressify requires the following dependencies:

1. [Node.js](https://nodejs.org/en): JavaScript runtime used for executing the script.
2. [Chokidar](https://www.npmjs.com/package/chokidar): Node.js library used to watch the changes in the filesystem. It allows Expressify to automatically compile the scripts whenever changes are detected.

## Installation
First, you need to install Node.js and npm (Node Package Manager). Npm is distributed with Node.js which means when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en)

Then clone or download this repository.

Next, navigate to the project directory and install the dependencies via npm:
`npm install`

This will install all the required dependencies mentioned above. Once everything is installed, you can run Expressify by executing the following command in the project directory:
`node expressify.js`

Now, whenever you save an After Effects Expression JavaScript file in the `scripts` folder, Expressify will automatically update the `ExpressionLib.js` with the properly formatted string version of your script.

## Contributing
Your contributions are always welcome! If you want to improve the Expressify, please create a pull request.

## License
Expressify is open source, licensed under the MIT license.

Thank you for using Expressify!