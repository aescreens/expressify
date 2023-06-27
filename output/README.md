# Expressify
Compile all your After Effects expressions to one file. Automatically stringify, include line breaks, and indentations.

## Requirements
- [Chokidar](https://www.npmjs.com/package/chokidar) `npm install chokidar`
- [Node.js](https://nodejs.org/en) 16 or later

### Step 1.
In the expressify.js file, update the watchFolder and outputFile.

### Step 2.
Open a new terminal within the project folder and run the script with Node `node expressify.js`

### Step 3.
Add each expression as its own js file within the source folder. Whenever you add, change, or remove files, the ExpressionLib.js file will be updated automatically.