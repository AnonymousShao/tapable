const { AsyncParallelHook } = require('tapable');

class Lession {
    constructor() {
        this.hooks = {
            arch: new AsyncParallelHook(['name'])
        }
    }
    // 主要是用来进行注册事件的
    tap() {
        this.hooks.arch.tapAsync('node', (name, cb) => {
            setTimeout(() => {
                console.log(name, 'node');
                cb();
            }, 1000);
        });

        this.hooks.arch.tapAsync('react', (name, cb) => {
            setTimeout(() => {
                console.log(name, 'react');
                cb();
            }, 1000);
        });
    }

    start() {
        this.hooks.arch.callAsync('shao', () => {
            console.log('end');
        });
    }
}

const l = new Lession();
l.tap();
l.start();