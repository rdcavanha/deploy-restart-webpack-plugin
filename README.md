## deploy-restart-webpack-plugin
A webpack plugin wrapper for the deploy-restart module
https://github.com/rdcavanha/deploy-restart

Install it through:

    npm i -D deploy-restart-webpack-plugin

## Usage
```javascript
const {DeployRestartWebpackPlugin} = require('deploy-restart-webpack-plugin');

const webpackConfig = {
    plugins: [
        new DeployRestartWebpackPlugin({
            user: 'john',
            host: '192.168.1.1',
            localPath: '/home/john/app/dist',
            remoteDeployPath: '/home/remote/services/app',
            restart: true,
            serviceName: 'app'      
        }, true),
    ],
};

module.exports = webpackConfig;
```

The last parameter of the constructor is a flag that controls whether the plugin will be executed. This is useful if you have a variable that tells you when webpack is running for production of development.

The plugin will run after each successful build


