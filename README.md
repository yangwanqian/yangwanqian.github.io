# Wanqian Yang Academic Homepage

This repository contains a Markdown-driven academic homepage built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The local site will usually be available at:

```text
http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Content structure

Most homepage content is maintained as Markdown files with YAML frontmatter.

```text
src/content/publications/   # one publication per Markdown file
src/content/projects/       # one project per Markdown file
src/content/notes/          # one technical note per Markdown file
src/content/news/           # one news item per Markdown file
src/data/profile.ts         # profile, links, research interests, navigation
```

## Add a publication

Create a new file under `src/content/publications/`, for example:

```md
---
title: "Paper title"
authors:
  - "Wanqian Yang"
venue: "Journal or Conference"
year: 2026
type: "journal"
status: "Published"
selected: true
tags:
  - "Wind turbine"
  - "Condition monitoring"
links:
  doi: ""
  pdf: ""
  code: ""
---

Write the abstract, contribution summary, or citation note here.
```

## Add a project

Create a new file under `src/content/projects/`, for example:

```md
---
title: "Project title"
title_cn: "项目中文名称"
period: "2026–Present"
role: "Principal researcher"
featured: true
tags:
  - "OpenFAST"
  - "Abaqus"
links:
  code: ""
  demo: ""
  paper: ""
---

Write the project background, methods, and expected outputs here.
```

## Deployment

The site is built by GitHub Actions and deployed to GitHub Pages from the generated `dist/` artifact.

After merging changes into `master`, make sure the repository Pages settings use **GitHub Actions** as the source.
