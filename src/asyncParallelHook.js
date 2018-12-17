class AsyncParallelHook {
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
        const done = () => {
            index ++;
            if(index === this.tasks.length) {
                callBack();
            }
        };
        this.tasks.forEach((task) => {
            task(args, done);
        });
    }
}

const l = new AsyncParallelHook(['name']);
l.tapAsync('node', (name, cb) => {
    setTimeout(() => {
        console.log(name, 'node');
        cb();
    }, 1000);
});
l.tapAsync('react', (name, cb) => {
    setTimeout(() => {
        console.log(name, 'react');
        cb();
    }, 1000);
});
l.callAsync('shao', () => {
    console.log('end');
});