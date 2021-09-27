# moleculer + react + typescript 示例项目

一个 moleculer + react + typescript 的全栈开发方案

## 使用方法

开发环境
```
npm run dev
```

docker-compose (测试环境)
```
docker-compose build 
docker-compose up
```

k8s (产线环境，未测试)
```
docker build . -t <私有镜像仓库>/<镜像名称>
docker image push <私有镜像仓库>/<镜像名称>
vi k8s.yaml # 修改对应镜像名称
kubectl apply -f k8s.yaml
```

## 此项目的制作步骤

- `moleculer init project-typescript <项目名称>` 官方 ts 模板初始化项目
- 添加 `web` 目录及 react webpack 等跑通 tsx  https://github.com/postor/moleculer-react-ts-example/commit/12876083fa19498fa74abcd1533371fd88ff6598
- 添加 `antd` 和 `react-router-dom` 完成基本界面和路由 https://github.com/postor/moleculer-react-ts-example/commit/8a210f775404bc61918164a1b87e6bb2ba9cbb81
- 优化命令脚本 `dev` `build` `dc:up` https://github.com/postor/moleculer-react-ts-example/commit/d510afeb0d0b938a7837a241c201e8b33cd1adc0

## 更多优化

使用本地 mongodb 以支持本地开发使用更复杂的查询：

- 启动本地 mongodb
- 配置环境变量 MONGO_URI

使用 BrowserRouter 以支持正常的路径而非哈希

- 配置 web 服务在非 api 且没有文件的情况下发送 `public/index.html`

使用 SSR 以支持更好的 SEO

- 选项A：将现有 web 服务集成 next.js 
- 选项B：另建 next.js + express 项目，通过代理调用本项目接口
- 选项C（不建议）：在现有 web 服务增加 ssr 