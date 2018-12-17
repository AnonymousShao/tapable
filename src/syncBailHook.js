class SyncBailHook {
    constructor(args) {
        this.args = args;
        this.tasks = [];
    }
    tap (name, task) {
        this.tasks.push(task);
    }
    call(...args) {
        let ret;
        let index = 0;
        do {
            ret = this.tasks[index++](...args);
        } while(index < this.tasks.length && ret === undefined );
    }
}

const s = new SyncBailHook (['name']);
s.tap('node', (name) => {
    console.log(name, 'node');
    return undefined
});

s.tap('react', (name) => {
    console.log(name, 'react');
});

s.call('shao');