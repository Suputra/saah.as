import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { BuildCtx } from "../../util/ctx"
import { VFile } from "vfile"

async function* processFile(ctx: BuildCtx, file: VFile) {
  // Check if the file has a redirect in frontmatter
  const redirectUrl = file.data.frontmatter?.redirect
  
  if (redirectUrl && typeof redirectUrl === 'string') {
    const slug = file.data.slug!
    
    // Create a robust redirect that works with both client and server-side rendering
    yield write({
      ctx,
      content: `
<!DOCTYPE html>
<html lang="en-us">
<head>
  <title>Redirecting...</title>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0; url=${redirectUrl}">
  <link rel="canonical" href="${redirectUrl}">
  <script>
    window.location.replace("${redirectUrl}");
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    .redirect-message {
      margin: 2rem 0;
    }
    .redirect-link {
      color: #3273dc;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="redirect-message">
    <h1>Redirecting...</h1>
    <p>If you are not redirected automatically, click <a class="redirect-link" href="${redirectUrl}">here</a>.</p>
    <p><small>Redirect destination: ${redirectUrl}</small></p>
  </div>
</body>
</html>`,
      slug,
      ext: ".html",
    })
    
    // Mark this file to skip normal content processing
    if (file.data.frontmatter) {
      file.data.frontmatter.skipContent = true
    }
  }
}

export const RedirectPages: QuartzEmitterPlugin = () => ({
  name: "RedirectPages",
  async *emit(ctx, content) {
    for (const [_tree, file] of content) {
      yield* processFile(ctx, file)
    }
  },
  async *partialEmit(ctx, _content, _resources, changeEvents) {
    for (const changeEvent of changeEvents) {
      if (!changeEvent.file) continue
      if (changeEvent.type === "add" || changeEvent.type === "change") {
        yield* processFile(ctx, changeEvent.file)
      }
    }
  },
}) 