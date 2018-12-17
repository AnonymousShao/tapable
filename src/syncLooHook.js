class SynLoopHook {
    constructor(args) {
        this.args = args;
        this.tasks = [];
    }
    tap (name, task) {
        this.tasks.push(task);
    }
    call(...args) {
        let ret;
        this.tasks.forEach((task) => {
            do {
                ret = this.task[index]();
            } while(ret !== undefined);
        });
    }
}

const s = new SynLoopHook (['name']);
s.tap('node', (name) => {
    console.log(name, 'start node');
    return 'node is success'
});

s.tap('react', (name) => {
    console.log(name, 'react will start');
});

s.call('shao');