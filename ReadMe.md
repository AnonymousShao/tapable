## webpack原理

### require

```
    主要是可以手写一个webpack, 主要包含了require的实现， loader, plugins的执行
    可以手写一个loader plugin
```

### tapable 事件流

```
webpack 本质上是基于事件流的机制，它的工作是把各个工作流程串联起来，而这实现的核心就是Tapable, 类似于node的events库，核心原理是基于发布订阅模式
sync
    SyncHook(同步) 
    SyncBailHook(添加下一步执行的条件：返回undefined往下执行，否则停止)
    SyncWaterfallHook(瀑布流：前一个的输入是下一个的输出)
    SyncLoopHook(一个事件可以执行多次) do while, 条件依然是返回的是否为undefined

    tap call

async
    AsyncParallel*
        AsyncParallelHook
        AsyncParallelBailHook
    AsysncSeries*
        AsyncSeriesHook
        AsyncSeriesBailHook
        AsyncSeriesWaterfallHook

    tapAsync callAsync
    tapPormise, promise
    
```