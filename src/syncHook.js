class SyncHook {
    constructor(args) {
        this.args = args;
        this.tasks = [];
    }
    tap (name, task) {
        this.tasks.push(task);
    }
    call(...args) {
        this.tasks.forEach((task) => {
            this.args.length === task.length ? task(...args) : null;
        });
    }
}

const s = new SyncHook (['name']);
s.tap('node', (name) => {
    console.log(name, 'node');
});

s.tap('react', (name) => {
    console.log(name, 'react');
});

s.call('shao');