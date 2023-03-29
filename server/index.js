// const { join } = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const { VK } = require('vk-io')
const app = express()
const Axios = require('axios')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const vkAppToken =
    'fd74f990fd74f990fd74f99026fd1a9c64ffd74fd74f990a09c00fe6b7fc247f720ca0a'
  const vkGroupToken =
    'e439ee556ad7266bfc8dc4ef2168218976928e822c9b516b067010ef27cc6b76b6f58441e2241fd09bed1'
  const nuxt = new Nuxt(config)

  const appApi = new VK({
    token: vkAppToken,
    apiVersion: '5.103'
  })

  const groupApi = new VK({
    token: vkGroupToken,
    apiVersion: '5.103'
  })

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  const posts = {
    lastUpdateTime: 0,
    postsData: [],
    update() {
      if (Date.now() - posts.lastUpdateTime > 60000) {
        require('./api/getPosts')(appApi)
          .then((data) => (posts.postsData = data))
          .then(() => (posts.lastUpdateTime = Date.now()))
      }
    }
  }

  app.get('/api/posts', (req, res) => {
    posts.update()

    setTimeout(() => res.json({ posts: posts.postsData }), 500)
  })

  app.get('/api/group', require('./api/group')(appApi))

  app.post(
    '/upload-screenshot',
    fileUpload({ fileSize: 2000000 }),
    async (req, res) => {
      const { id, ownerId, accessKey } = await groupApi.upload.messagePhoto({
        source: req.files.file.data,
        peer_id: 331727889
      })

      res.end(`photo${ownerId}_${id}_${accessKey}`)
    }
  )

  app.post('/api/report', bodyParser.json(), (req, res) => {
    let message = ''

    if (req.body.type === 'player') {
      message = `
      &#9940; Жалоба на игрока
      &#128100; Ник нарушителя: ${req.body.nick}
      
      ${req.body.reportText}
      
      Отправитель: ${req.body.feedback}`
    } else if (req.body.type === 'bug') {
      message = `
      &#128030; Найден баг!
      
      Шаги воспроизведения:
      ${req.body.reproductionSteps}

      Ожидаемый результат
      ${req.body.expectedResult}

      Фактический результат
      ${req.body.actualResult}
      
      Отправитель: ${req.body.feedback}`
    }

    groupApi.api.messages.send({
      peer_id: 331727889,
      attachment: [req.body.photo],
      message
    })
  })

  let { unixtime } = (
    await Axios.default.get(
      `http://worldtimeapi.org/api/timezone/Europe/London`
    )
  ).data

  setInterval(() => unixtime++, 1000)

  app.post('/api/tto', (_uReq, res) => {
    res.send(String(Date.UTC(2020, 0, 10, 21, 0, 0) / 1000 - unixtime))
  })

  // app.use((req, _uRes, next) => {
  //   consola.log(req.url)

  //   next()
  // })
  // Give nuxt middleware to express
  // if (process.env.NODE_ENV !== 'production') {
  app.use(nuxt.render)
  // } else {
  //   app.use(
  //     express.static(join(__dirname, '..', 'dist'), { index: 'index.html' })
  //   )
  // }

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
