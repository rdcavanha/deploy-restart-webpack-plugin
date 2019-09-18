import {DeployRestart, DeployRestartOptions} from "deploy-restart";

export class DeployRestartWebpackPlugin {
    options: DeployRestartOptions;

    constructor(options: DeployRestartOptions) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.done.tap(
            'DeployRestartWebpackPlugin',
            stats => {
                if (!stats.compilation.errors.length)
                    new DeployRestart(this.options)
                        .start()
                        .then(() => {
                            console.info('DeployRestartWebpackPlugin succeeded');
                        })
                        .catch(err => {
                            console.error('DeployRestartWebpackPlugin failed', err);
                        });
            });
    }
}
