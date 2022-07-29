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
    "revision": "47e7809ed7a64fa2b54c9519fbb07a80"
  },
  {
    "url": "assets/css/0.styles.02f597c0.css",
    "revision": "a20ff6da481b655911273552af4c8ae4"
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
    "url": "assets/js/12.10426a70.js",
    "revision": "ce44d17831316d511740f71a197141b9"
  },
  {
    "url": "assets/js/13.83dc2ad0.js",
    "revision": "3f6eb01d50e60be49172dbfe5b36c7d0"
  },
  {
    "url": "assets/js/14.9c75d686.js",
    "revision": "1174b5c125d70a65b898e9297b1ea5d4"
  },
  {
    "url": "assets/js/15.8d92606e.js",
    "revision": "7fe99f147c056b9010d07ed2d9fa4057"
  },
  {
    "url": "assets/js/16.df38a0c3.js",
    "revision": "7bf9dabb88c8b3cb26441a004ea6dd69"
  },
  {
    "url": "assets/js/17.24071a9c.js",
    "revision": "45592da26fe53d97cfa55ab17020e057"
  },
  {
    "url": "assets/js/18.efa3fce3.js",
    "revision": "358609bee1154cbbe633fbd758faa7b3"
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
    "url": "assets/js/4.83386419.js",
    "revision": "0b348a32905ca25eea5c2feec576ca18"
  },
  {
    "url": "assets/js/5.c3b628e3.js",
    "revision": "32a9e388b253fedcc3d6f8fef7d1c0cd"
  },
  {
    "url": "assets/js/6.f242a0ce.js",
    "revision": "4e090d9c35b29f4a5870dc499282bb7d"
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
    "url": "assets/js/9.1b0eb1cc.js",
    "revision": "48c5c516f2ea2ceb7d75bf08bbc78bb5"
  },
  {
    "url": "assets/js/app.e4a8bffb.js",
    "revision": "3071f8b288676a956e8c86c4d66016b9"
  },
  {
    "url": "config/index.html",
    "revision": "32d09f06caae6570907ce1829ffc7065"
  },
  {
    "url": "guide/index.html",
    "revision": "42199b87d13eb4b76b6c9580a5e3b66f"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "bfd84370ea2f81b2761165c199606be2"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "4c94ca698301b46eb336a2c280f49d07"
  },
  {
    "url": "react/index.html",
    "revision": "b41a7a2c4963dc27080d21798ac4e022"
  },
  {
    "url": "Tests/index.html",
    "revision": "d59ba2fcf867a40aaa9c263364983c41"
  },
  {
    "url": "vue/index.html",
    "revision": "5cb65358188cab49c2ef46b4b5bc8ddd"
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
