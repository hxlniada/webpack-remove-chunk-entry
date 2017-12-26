/**
 * @file webpack-remove-chunk-entry
 * @author huangxueliang
 */

class RemoveEntryModulePlugin {

    constructor(options = {}) {
        this.chunks = options.chunks || [];
    }

    apply(compiler) {

        compiler.plugin('compilation', compilation => {
            compilation.plugin('optimize-chunks-basic', chunks => {
                chunks.slice().forEach(chunk => {
                    if (this.chunks.includes(chunk.name)) {
                        chunk.removeModule(chunk.entryModule);
                        chunk.entryModule = null;
                    }
                });
            });
        });
    }
}
module.exports = RemoveEntryModulePlugin;
