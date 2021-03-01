const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/onval/Projects/ovalb.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/onval/Projects/ovalb.github.io/src/pages/index.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Users/onval/Projects/ovalb.github.io/src/pages/Project.js")))
}
