import {DeployRestart, DeployRestartOptions} from "deploy-restart";

export class DeployRestartWebpackPlugin {
    options: DeployRestartOptions;
    shouldStart = false;

    constructor(options: DeployRestartOptions, shouldStart: boolean) {
        this.options = options;
        this.shouldStart = shouldStart;
    }

    apply(compiler) {
        compiler.hooks.done.tap(
            'DeployRestartWebpackPlugin',
            stats => {
                if (!stats.compilation.errors.length && this.shouldStart)
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
