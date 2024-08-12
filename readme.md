# LobeChat 代码块底部复制按钮

## 简介

这是一个 Chrome 扩展程序，用于在 LobeChat 网站的代码块底部添加复制按钮。请访问 LobeChat 网站获取更多信息：

- https://lobehub.com/

## 功能

- 在 LobeChat 网站的每个代码块底部添加一个复制按钮
- 点击按钮可以轻松复制代码块内容

## 安装说明

1. 下载此文件夹到本地。
2. 打开 `manifest.json` 文件，修改以下内容：
   - 将 `host_permissions` 中的 URL 改为您的 LobeChat 主机域名
   - 将 `content_scripts` 中 `matches` 的 URL 也改为您的 LobeChat 主机域名
3. 打开 Chrome 浏览器，进入扩展程序页面（chrome://extensions/）。
4. 启用"开发者模式"。
5. 点击"加载已解压的扩展程序"，选择此文件夹。

## 使用方法

安装完成后，访问您的 LobeChat 网站。您应该能看到每个代码块底部都添加了一个复制按钮。

## 文件说明

- `manifest.json`: 扩展程序的配置文件
- `content.js`: 实现复制按钮功能的 JavaScript 文件
- `styles.css`: 复制按钮的样式文件

## 注意事项

请确保将 `manifest.json` 中的 URL 修改为您实际使用的 LobeChat 网站地址，否则扩展程序将无法正常工作。

请根据您实际使用的地址进行配置。

## 版本

当前版本：1.0
