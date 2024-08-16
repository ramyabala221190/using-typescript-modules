### Project setup

1. C:\Users\User\angular>mkdir using-typescript-modules && cd using-typescript-modules

2. C:\Users\User\angular\using-typescript-modules>npm init

3. TS is only used in development, as it gets compiled to JS to be used with Node or browser.
So we install it as a dev dependency
C:\Users\User\angular\using-typescript-modules>npm install typescript --save-dev

4. Install TS globally to be used from anywhere
C:\Users\User\angular\using-typescript-modules>npm install typescript -g


5. Creating a tsconfig.json file using the below command which will control how the compilation from TS to JS occurs
C:\Users\User\angular\using-typescript-modules>tsc --init

6. In the tsconfig.json:

"target": "es2016"   
This is the JS version we will be targetting when the compiler converts TS into JS.

"module": "commonjs"
This property controls which module format the TS compiler will generate when it transpiles your TS into JS.
With commonjs you can run the compile Js files using node. Example: node b.js in the terminal.
Switch from commonjs to ES2015 to run the modules in the browser.

Change the outDir from "./" to "./dist" so that the compiled .js files are stored neatly in a seperate directory.

### To run the modules using node.

Ensure "module" in tsconfig.json is "commonjs".
Run tsc in the terminal.
Then execute node b.js in the terminal to see the output.

### To run the modules in the browser install a development web server

npm install esmodules-dev-server --save-dev

Ensure the "module" in tsconfig.json is changed from commonjs to ES2015
    "module": "ES2015",                                /* Specify what module code is generated. */

Run tsc in the terminal to regenerate the .js files.

Add index.html where you reference the b.js from dist.

Run npm run start

### JS module systems

AMD
CommonJS
UMD
ECMAScript(ES)

