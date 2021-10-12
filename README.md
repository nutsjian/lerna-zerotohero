# lerna-zerotohero

```bash
# 将远程项目作为子模块关联到该项目。所有依赖的组件库都需要变为子模块。
git submodule add {git repo} packages/{folder_name}


```


#### 实际应用场景
```bash
# 1. 初始化 lerna 工程
mkdir lerna-demo
cd lerna-demo
lerna init --independent

# 2. 将远程项目作为 lerna 工程的子项目
# 这样做的好处是，比如多个团队开发项目，有UI库的团队，当UI库的团队更新了 UI 组件的代码后，项目团队的人员只要在
# lerna 中更新 submodule 后，重新 build 即可
git submodule add https://github.com/nutsjian/create-react-ui-zerotohero.git packages/create-react-ui-zerotohero
git submodule add https://github.com/nutsjian/create-jslib-zerotohero.git packages/create-jslib-zerotohero
# 更新
git submodule update

```