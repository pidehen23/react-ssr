### 项目介绍

这是一个 react ssr 实践的项目

### 项目启动

安装依赖

```shell
yarn
```

启动

```js
yarn dev
```

### 目录结构

`client`文件夹下存放前端内容，`server`文件夹下存放服务端文件

```js
.
├── README.md
├── client
│   ├── components
│   ├── hoc
│   ├── index.js
│   ├── router.js
│   ├── routes
│   ├── store
│   └── utils
├── server
│   ├── app.js
│   ├── index.js
│   └── utils.js
├── src
├── webpack.base.js
├── webpack.client.js
├── webpack.server.js
└── yarn.lock
```

### 项目实现

该 ssr 项目目前实现的功能如下：

- [x] 页面刷新首屏实现服务端渲染，可显著提升首屏渲染速度
- [x] 引入 redux，实现 store 服务端和客户端的同步
- [x] 引入 react-router-config，服务端和客户端可共用
- [x] 组件内入引入数据预取功能，可定义数据预取静态方法
- [x] css 文件实现服务端渲染
- [ ] 组件懒加载
- [ ] 代码切割
- [ ] 热更新方案(现在是基于实时打包，客户端和服务端同时打包，项目大了肯定会影响速度)

### 项目目标

- 暂无
