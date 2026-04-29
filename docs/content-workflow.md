# 内容维护工作流（推荐）

这个站点基于 Jekyll + academicpages，**最稳妥的内容格式是 Markdown（`.md`）+ YAML front matter**。

> 结论：
> - 日常维护建议优先用 `.md`（更直观、与当前主题完全兼容）。
> - `.json` 更适合做数据源（如列表数据），但你现在这个项目的页面渲染默认就是按 Markdown 集合来走，强行全改成 JSON 会增加维护成本。

## 1) 你只需要维护这几个目录

- 个人简介页：`_pages/about.md`
- 论文：`_publications/*.md`
- 演讲：`_talks/*.md`
- 教学：`_teaching/*.md`
- 通用页面（CV、Publications 页面本身等）：`_pages/*.md`

## 2) 固定模板（直接复制）

已提供模板目录：`content-templates/`

- `content-templates/publication-template.md`
- `content-templates/talk-template.md`
- `content-templates/teaching-template.md`

新增内容时：
1. 复制一个模板文件到对应目录。
2. 按文件名规则重命名。
3. 只改 front matter 中字段和正文。

## 3) 文件命名规则（非常重要）

- publication: `YYYY-MM-DD-short-title.md`
- talk: `YYYY-MM-DD-short-title.md`
- teaching: `YYYY-term-course.md`

示例：
- `2026-04-29-fault-diagnosis-survey.md`
- `2026-05-10-ieee-talk.md`
- `2026-spring-machine-learning.md`

## 4) 图片放置规则

- 所有图片建议放在：`images/`
- 个人头像由 `_config.yml` 的 `author.avatar` 控制，建议只写文件名，例如：`photo_ywq.jpg`
- 文中引用图片示例：`![caption](/images/your-image.png)`

## 5) 本地预览

```bash
bundle exec jekyll serve
```

访问 `http://127.0.0.1:4000` 检查页面。

## 6) 常见坑

- 改了 `_config.yml` 后，必须重启 `jekyll serve`。
- front matter 必须以 `---` 开始和结束。
- 日期格式尽量用 `YYYY-MM-DD`。
