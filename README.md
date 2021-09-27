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