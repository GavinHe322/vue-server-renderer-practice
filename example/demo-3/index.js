const Vue = require('vue')
const server = require('express')()
const { readFileSync } = require('fs')
const path = require('path')

const template = readFileSync(path.join(__dirname, './index.template.html'), 'utf-8')

const renderer = require('vue-server-renderer').createRenderer({
  template
})

const context = {
  title: 'vue ssr',
  metas: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `
}

server.get('*', (req, res) => {
  const app = new Vue({
    data() {
			return {
				url: req.url
			}
		},
    template: `<div>URL {{ url }}</div>`
  })

  renderer
    .renderToString(app, context, (err, html) => {
      console.log(html)
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
    })
})

server.listen(8080, () => {
	console.log('listen at: http://localhost:8080')
})
