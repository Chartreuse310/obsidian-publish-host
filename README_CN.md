<div align="center">

<h1 align="center">Obsidian Publish for Free</h1>

[English](./README.md) / 简体中文

实现免费的官方发布功能(部分功能缺失)，可以查看 [demo](https://obs.deno.dev) 确认实际效果。
</div>


## 已知的缺失功能：

- 反链显示
- 大纲/目录
- 关系图(存在bug)
- 密码功能

## 教程

> 本地需要安装deno环境 https://docs.deno.com/runtime/manual

### 1. 生成网站 cache 数据
将你的仓库里面需要发布的文件拷贝到`vault`目录下面，然后执行下面的命令：
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

- 尽量实现上面缺失的功能(需要编写md解析器)
- 开发插件以便在ob中即可发布
- 实现单文档密码与整站密码分离

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y3VBAML)
