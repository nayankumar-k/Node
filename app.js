var express = require('express')
var app = express()
var url = require('url')
self.addEventListener('fetch', function (event) {
  const parsedUrl = url.parse(event.request.url)
  var req = {
    url: parsedUrl.href,
    method: event.request.method,
    body: body,
    headers: {
      'content-type': event.request.headers.get('content-type')
    },
    unpipe: function () {}
  }
  var res = { /* our mock Node http Server Response object */ }
  event.respondWith(new Promise(function (resolve) {
    app(req, res)
  }))
})