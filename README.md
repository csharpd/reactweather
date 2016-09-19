# Let's React

1. To get a React **Hello World App** up and running at `http://localhost:8080/`, first clone this repo
2. To install the required dependencies run `npm install`
3. Check that the root directory now has a node_modules directory. This should contain a react folder, a react-dom folder and all the corresponding dependacies
4. Run 'npm run production' in the command line and check that a *dist* folder gets created. This should contain an index.html file and a index_bundle.js file.
5. Rack up locally by running `npm run start` in the command line. You should see **Hello Friend** at `http://localhost:8080/` 💥


## OR 

### **Set up from scratch** 

1. Download node - https://nodejs.org/en/
2. `mkdir hellowordreact && cd helloworld react` 
3. `npm init` - when prompted press enter enter enter and then finally confirm yes
4. `npm install - - save react react-dom`. This will product two directorys - `node_modules` & `package.json`. `node_modules` folder should include react react-dom and the corresponding dependencys
N.B react dom is the glue between react and the DOM. React has been split out from react dom becuase react native developers don't need react dom.
People who clone our repo will use package.json to understand what dependacies they need to have
`   "dependencies": {
    "react": "^15.3.1",
    "react-dom": "^15.3.1"
  }`

5. Now install the rest of the tooling using the following command.
`npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react`
*N.B* package.json separates dependancies from development dependancies
6. Next `mkdir app && cd app`
7. Then `touch index.html index.js`
8. In index.html --> 
``` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Github Battle</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
  </head>
  <body>
  	<div id="app"></div>
  </body>
</html>
````
9 In the root dir —> `touch webpack.config.js`
This file outputs all the code to one single file after doing the transformations that are specified by the loader 
Webpack needs to know 
	a. the entry point of the app --> `app.index.js`,
	b. where to output —> the executing script will reside in `__dirname + ‘/dist’, filename: “index_bundle.js”`,
    c. What to transform --> any js files, excluding everything that's in the node modules folder. The transformation is done using  babel-loader - this takes JSX and transpires into regular javascript —> `loader: “babel-loader”`. 
10. Set up babel configuration, in root `touc .babelrc file` -->
``` 
{
	"presets": [
		"react"
	]
}
```

10. add html_webpack code below to webpack.config.js so that index.html file can reference the new index_bundle.js file.
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})
```

`plugins: [HtmlWebpackPluginConfig]`

11.  In package.json change scripts

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ```

```
 "scripts": {
    "production": "webpack -p",
    "start": "webpack-dev-server"
  },
  ```
 12.run the `npm run production` - This creates **dist** folder etc for production enviroment. 

13. In `index.js`
```
var React = require(‘react’);
var ReactDOM = require(‘react-dom’)

// Creates a new react component - must have a render method - returns the ui of component
var HelloWorld = React.createClass({
	render: function () {
	return (
	<div>Hello World</div>
)
}
})

// we need to say where this react component should be rendered 
// reactDOM render method takes two arguments; the element you want to render and the place you want to append the element to. 
ReactDOM.render(
<HelloWorld />, document.getElementById(‘app’)
)
```

14. Rack up locally by running `npm run start` in the command line. You should see **Hello Friend** at `http://localhost:8080/` 💥









