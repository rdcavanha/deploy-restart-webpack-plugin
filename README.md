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
        }),
    ],
};

module.exports = webpackConfig;
```

The plugin will run after each successful build


