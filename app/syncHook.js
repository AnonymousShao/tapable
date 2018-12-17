const { SyncHook } = require('tapable');

class Lession {
    constructor() {
        this.hooks = {
            arch: new SyncHook(['name'])
        }
    }
    // 主要是用来进行注册事件的
    tap() {
        this.hooks.arch.tap('node', (t) => {
            console.log(t);
        });

        this.hooks.arch.tap('react', (name) => {
            console.log(name);
        });
    }

    start(cb) {
        this.hooks.arch.call('shao syncHook');
        cb();
    }
}

const l = new Lession();
l.tap();
l.start(() => {
    console.log('end');
});