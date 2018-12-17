class SyncWaterfallHook {
    constructor(args) {
        this.args = args;
        this.tasks = [];
    }
    tap (name, task) {
        this.tasks.push(task);
    }
    call(...args) {
        const [first, ...others] = this.tasks;
        others.reduce((pre, next) => {
            next(pre);
        }, first(...args));
    }
}

const s = new SyncWaterfallHook (['name']);
s.tap('node', (name) => {
    console.log(name, 'start node');
    return 'node is success'
});

s.tap('react', (name) => {
    console.log(name, 'react will start');
});

s.call('shao');