/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "34823ccb135bcc8136c74be07e7a4c5e"
  },
  {
    "url": "assets/css/0.styles.25e262e2.css",
    "revision": "8f7a6415eadfe5e8ce65054aea4e15f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56de3dcf.js",
    "revision": "29b9cdabf0daa2def0e3df00d06a45d6"
  },
  {
    "url": "assets/js/11.29ee2064.js",
    "revision": "c75c9125ecc8cdbea1cd522f5bb73529"
  },
  {
    "url": "assets/js/12.64d61ae1.js",
    "revision": "ca5de9d69aab7bfcc3ffeacd290c5d9e"
  },
  {
    "url": "assets/js/13.91e9e110.js",
    "revision": "493610210f8c6c1bc64fa401b934fbb9"
  },
  {
    "url": "assets/js/14.a88acbeb.js",
    "revision": "8ef710651f1ff987923ea4f1c89df1ea"
  },
  {
    "url": "assets/js/15.f807fb23.js",
    "revision": "9da83a8ffc05c09055c3756aba998eb1"
  },
  {
    "url": "assets/js/16.82e2f3be.js",
    "revision": "55266d8ef240673ac4cf5c2e5419e542"
  },
  {
    "url": "assets/js/17.b7097fef.js",
    "revision": "b2fe76e10fd47207674ce39b5c6cd6b5"
  },
  {
    "url": "assets/js/18.fcea3dc3.js",
    "revision": "ad42b538d342591f755c6a9c4e0e4e66"
  },
  {
    "url": "assets/js/19.c379f00b.js",
    "revision": "8f8bb6aa27e1c4f6e311a0e8efb61287"
  },
  {
    "url": "assets/js/2.2e060d7f.js",
    "revision": "16cc2cdb9f245c6f8ffabb2216398506"
  },
  {
    "url": "assets/js/3.69a4940f.js",
    "revision": "2e2baaf7338929727644099cf7883caa"
  },
  {
    "url": "assets/js/4.93106cb6.js",
    "revision": "e540f1a4ccb173dce42331cfd802003b"
  },
  {
    "url": "assets/js/5.c1e81400.js",
    "revision": "0eec7597c063ffc0bc68c3661cdea8d9"
  },
  {
    "url": "assets/js/6.6b2c5d4e.js",
    "revision": "b1e11dde630cbcab8de58b6bce880df1"
  },
  {
    "url": "assets/js/7.1ea198c2.js",
    "revision": "e619441a9101924da811f4f0142e3e6c"
  },
  {
    "url": "assets/js/8.336af8b3.js",
    "revision": "e13dd9d7edde55367a7387cca9c26ad5"
  },
  {
    "url": "assets/js/9.e5a93376.js",
    "revision": "633fe15f3cf45ae287901b796f005dad"
  },
  {
    "url": "assets/js/app.c88371ac.js",
    "revision": "549f8cf79417fd342d8be96e7773a023"
  },
  {
    "url": "config/index.html",
    "revision": "4bbe2770323266fb1fb29c291ea3570b"
  },
  {
    "url": "guide/index.html",
    "revision": "e42bb0771555ee21d5dd7acd75b6a7d3"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "31161179ca603ddff374a5498eb4f698"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "42d4c1e46cfe37303d0f750911e233a9"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "5bd056902868041dcce45e16b6e3496d"
  },
  {
    "url": "react/index.html",
    "revision": "654b93daf773570f8dcc68524a2501ea"
  },
  {
    "url": "Tests/index.html",
    "revision": "8afb47550e351cd03e8798a7c149c94c"
  },
  {
    "url": "vue/index.html",
    "revision": "147b88405544efb64be4b1e2327fa63a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
