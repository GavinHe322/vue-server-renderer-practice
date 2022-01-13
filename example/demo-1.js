const Vue = require('vue')

const app = new Vue({
  template: '<div>hello world</div>'
})

// 创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer()

// 将 vue instance 渲染为 html

// renderer.renderToString(app, (err, html) => {
//     if (err) throw err

//     console.log(html)
// })

// 2.5.0+, 如果没有传入回调函数，则返回 promise
renderer.renderToString(app).then(html => {
  // <div data-server-rendered="true">hello world</div>
  console.log(html)
})
