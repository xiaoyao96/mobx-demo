本项目由 create-react-app 创建的react + ts + 单页应用，经过完善已支持以下功能：
- 支持scss、css，使用px作为单位，设计稿以750为准，编译时自动转rem，支持常用mixins：单行多行文字、自动选用多倍图等。
- 支持ts、js、tsx、jsx。es6语法及api随意使用（已注入polyfill），兼容到安卓4.4、IOS 8以上。
- 开发环境下的自带vconsole

# 项目结构
```
├─config                —— webpack配置
│  └─jest
├─dist                  —— 项目打包输出目录
├─public                —— index.html
├─scripts
└─src                   —— 开发目录
    ├─api               —— 接口
    ├─components        —— 组件
    │  └─Hello
    ├─config            —— 公共配置文件
    ├─pages             —— 页面
    │  └─home
    ├─store             —— redux仓库
    ├─style             —— 公共样式
    └─utils             —— 公共工具库
```
# 启动
```
npm run dev
```
