# Site repository for "Tele-Therapie in Österreich" (`tele-therapie.at`)

## Technology

 * Most of the site is static HTML, generated using the
   [Hugo](https://gohugo.io/) static site generator from Markdown
   files (in `site/content`) and HTML templates (in `site/layouts`).

 * Some elements of the site are dynamic and use the
   [Vue.js](https://vuejs.org/) framework to talk to a REST API
   backend.

 * The build of the Javascript components and other assets (e.g. CSS)
   is managed by [Webpack](https://webpack.js.org/) via the [Vue.js
   command line tool](https://cli.vuejs.org/). (The only complex part
   of this is ensuring that the Hugo static site generator has access
   to the compiled asset bundles created by Webpack. This is done
   using a Webpack plugin to generate an *assets manifest* that can be
   accessed in Hugo templates to determine which Javascript and CSS
   bundles are needed.)

 * Styling of the website is done using the [Bulma](https://bulma.io/)
   CSS framework (compiled and customised from SASS by Webpack).

 * The site is deployed to [Netlify](https://www.netlify.com/) and
   uses the [Forestry CMS](https://forestry.io/) to provide a
   convenient front end for administrators to edit site content.
