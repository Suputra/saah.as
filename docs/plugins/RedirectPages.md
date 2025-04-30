---
title: RedirectPages
tags:
  - plugin/emitter
---

This plugin emits HTML redirect pages for any content file with a `redirect` property defined in its frontmatter.

For example, if you have a file `redirect-example.md` with the following frontmatter:

```md title="redirect-example.md"
---
title: "Redirect Example"
redirect: "https://example.com"
---
```

When a user visits the page for `redirect-example.md`, they will be automatically redirected to `https://example.com`.

This is useful for creating redirect pages within your Quartz site that point to external resources.

> [!note]
> For information on how to add, remove or configure plugins, see the [[configuration#Plugins|Configuration]] page.

This plugin has no configuration options.

## API

- Category: Emitter
- Function name: `Plugin.RedirectPages()`.
- Source: [`quartz/plugins/emitters/redirects.ts`](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/emitters/redirects.ts). 