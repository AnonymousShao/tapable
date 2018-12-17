class AsyncSeriesHook {
    constructor(args) {
        this.args = args;
        this.tasks = [];
    }
    tapAsync(name, task) {
        this.tasks.push(task);
    }
    callAsync(...args) {
        const callBack = args.pop();
        let index = 0;
        const next = () => {
            if (this.tasks.length === index) { return callBack(); }
            const task = this.tasks[index++];
            task(...args, next);
        };
        next ();
    }
}

const l = new AsyncSeriesHook(['name']);
l.tapAsync('node', (name, next) => {
    console.log('a');
    setTimeout(() => {
        console.log(name, 'node');
        next();
    }, 1000);
});
l.tapAsync('react', (name, next) => {
    console.log('b');
    setTimeout(() => {
        console.log(name, 'react');
        next();
    }, 1000);
});
l.callAsync('shao', () => {
    console.log('end');
});