<div align="center">

<h1 align="center">Obsidian Publish Host for Free</h1>

[English](./README.md) / 简体中文

免费的 Obsidian Publish 托管服务，采用官方 UI
</div>

## 示例

[官方文档 Demo](https://obs.deno.dev)

## 已知的缺失功能：

- 反链显示
- 关系图谱(存在bug)
- 密码功能

## 部署教程

> 本地需要安装deno环境，查看安装教程 https://docs.deno.com/runtime/manual

### 1. 生成网站 cache 数据
将 Obsidian 仓库(vault)里面需要发布的文件拷贝到项目根目录下面的`vault`目录中，然后执行下面的命令生成 cache 数据：
```shell
deno task parse
```

### 2. 本地预览(可选)
```shell
deno task dev
```

### 3. 提交到github

### 4. 关联 deno deploy 项目


## 配置

publish的配置文件位于`src/backend/options.ts`

## 后续开发

- 实现上面缺失的功能
- 开发插件以便在ob中即可发布
- 实现单文档密码与整站密码分离

## 感谢

如果你喜欢本项目，欢迎 Star，或者请我喝杯咖啡，谢谢！

[<img style="float:left" src="https://user-images.githubusercontent.com/14358394/115450238-f39e8100-a21b-11eb-89d0-fa4b82cdbce8.png" width="200">](https://ko-fi.com/Y8Y3VBAML)
