# AGENTS.md

本文件为 AI 协作代理(以及新贡献者)提供本项目的上下文与约定。修改本项目前请先阅读。

## 项目概述

夜莺自制的北京公共交通线路图展示站点。纯静态站点(HTML/CSS/原生 ES6 模块,无前端框架、无构建步骤),通过 GitHub Pages 与 Gitee Pages 托管。目前包含三张线路图:北京市轨道交通线路图、夜班车线路图、快速公交线路图。

## 目录结构

- `index.html` — 主页,三张地图入口卡片
- `pages/map_page.html` — 通用地图查看页(所有地图共用,通过 `?name=` 选择)
- `pages/style.css` — 全站样式(使用 CSS 自定义属性 + `clamp()` 响应式)
- `pages/scripts/`
  - `config.js` — 地图目录与显示名映射、`rootUrl`
  - `map_page.js` — 地图页入口控制器
  - `get_latest_map.js` — 拉取 `latest.json`、加载图片、初始化 Panzoom
  - `get_json.js` — 通用 JSON 获取(基于 `fetch`)
  - `set_info.js` — 渲染版本号/日期/更新内容
  - `get_params.js` — URL 参数解析
  - `vendor/panzoom.min.js` — 本地化的 Panzoom 库(图片缩放)
- `build/get_map_info.py` — 构建脚本:扫描版本目录、JPG→WebP 转换、生成 `info.json` 与 `latest.json`
- `maps/<MapName>/<YYYYMMDD>/` — 各版本地图数据(`.jpg` 原图、`.webp` 展示图、`info.json` 版本信息)

## 数据流

1. 主页链接到 `map_page.html?name=rail_beijing`(或 `night_beijing` / `brt_beijing`)
2. `map_page.js` 读取 `name` 参数,从 `config.js` 查到地图目录与显示名
3. `get_latest_map.js` 拉取 `maps/<MapName>/latest.json`(仅含最新版本一项),得到最新版本目录,加载对应 `.webp`,图片 `onload` 后初始化 Panzoom
4. 再拉取该版本的 `info.json` 渲染版本号、日期、更新内容

## 构建与数据约定(重要)

- 添加新版本:在 `maps/<MapName>/` 下新建 `<YYYYMMDD>/` 目录,放入 `.jpg`,手写该目录的 `info.json`(`version` / `time{year,month,day}` / `latest` / `comment[]`),然后**必须**在仓库根目录运行 `python build/get_map_info.py`。脚本会:把 `.jpg` 转 `.webp`、重新生成顶层 `info.json`(全部版本数组)与 `latest.json`(最新版本单项)。
- 版本目录名必须是 `YYYYMMDD`(脚本解析前 8 位字符为日期)。
- 顶层 `info.json` 与 `latest.json` 由脚本生成,**不要手改**;每版本的 `info.json` 由人工维护。
- 所有 `info.json` 日期字段统一用 `time` 键(非 `date`),值为 `{year, month, day}`。
- 版本 `info.json` 的 `time` 必须与目录名日期一致。

## 前端约定

- 原生 ES 模块,无框架、无打包。Panzoom 已本地化到 `pages/scripts/vendor/`,用 `<script defer>` 加载,勿改回 CDN。
- 不要为单张地图新建独立 HTML 页;统一走 `map_page.html?name=` + `config.js` 注册(legacy 独立页已删除)。
- 数据获取用 `fetch`(见 `get_json.js`),不要回退到 XMLHttpRequest。
- 任何来自 JSON 等外部数据的内容,必须用 `textContent` / DOM API 写入节点,**禁止**用 `innerHTML` 拼接(防 XSS),见 `set_info.js`。
- 加载指示器(loading 动画/文案)只能在资源真正 `onload` 后隐藏,不要在设置 `src` 时就隐藏。
- 地图容器高度由图片自然宽高比撑开,不要写死 `height` 或用 JS 计算高度。
- 样式优先复用 `:root` 中的 CSS 自定义属性;响应式字号用 `clamp()`,小屏适配在 `@media (max-width:600px)` 内调整。
- `index.html` 与 `map_page.html` 中的"联系作者"区块内容相同,修改时需同步两处(已加注释提示)。

## 运行与验证

- 本地预览:在仓库根目录运行 `python -m http.server 8765`,访问 `http://localhost:8765/index.html`。
- 构建依赖:Python 3 + Pillow(`requirements.txt`)。

## 提交规范

- 提交信息使用中文,参考现有提交(如 `feat(地图数据): 添加...`、`auto update map info`)。
- 添加地图数据后,顶层 `info.json`、`latest.json`、新生成的 `.webp` 一并提交。
