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
    "revision": "8f679ca01500c7e644e83676cd794813"
  },
  {
    "url": "assets/css/0.styles.f880ab4f.css",
    "revision": "8d6bad01e6781a8bd6cbc05747129ec8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0b6bfcf2.js",
    "revision": "c561eb80ed1aa613d5684b95793e64b0"
  },
  {
    "url": "assets/js/11.840ea1eb.js",
    "revision": "63a5ce2d747e5ab938d9f6e0eda5bbc7"
  },
  {
    "url": "assets/js/12.ccfb77b2.js",
    "revision": "ce7b990cb65de4b27535f4f5f9fd380a"
  },
  {
    "url": "assets/js/13.b17a0716.js",
    "revision": "8fb733954aea8fd96b576d7480f286cd"
  },
  {
    "url": "assets/js/14.1fd7665f.js",
    "revision": "ff62bf457c0dfadb1376ea0b85c45b10"
  },
  {
    "url": "assets/js/15.8a12adf9.js",
    "revision": "1a03392986f95f6916885d654c64a44d"
  },
  {
    "url": "assets/js/16.ee8200c1.js",
    "revision": "3434d54cc210fd1f0ccee0c9a0f6e6b0"
  },
  {
    "url": "assets/js/17.07865f42.js",
    "revision": "c7d937dbc8a8c41fcf409f67f0607e7c"
  },
  {
    "url": "assets/js/18.cda93ac3.js",
    "revision": "ead976811be07e070be9896ea14d6133"
  },
  {
    "url": "assets/js/19.6a3bfe07.js",
    "revision": "1bb324645380f2c4665d299d5354cebb"
  },
  {
    "url": "assets/js/2.3b5d557f.js",
    "revision": "e0b427a9250fb25462ed2d279990682e"
  },
  {
    "url": "assets/js/20.6f531e7a.js",
    "revision": "79df1bb5cd7cfa7b477d464a6e953635"
  },
  {
    "url": "assets/js/21.4694ca9c.js",
    "revision": "5a737c79bd20435165cea8c3cacb4d00"
  },
  {
    "url": "assets/js/22.9f70170f.js",
    "revision": "47fdb7a9b7316b63155c58f8b0fe2ac1"
  },
  {
    "url": "assets/js/23.36ea7898.js",
    "revision": "560c01e8ea62bb0b5570d13be0570aa1"
  },
  {
    "url": "assets/js/24.c5911a9b.js",
    "revision": "374baf9af3f3fac26b0d4a85b6acbf7a"
  },
  {
    "url": "assets/js/25.3eaba999.js",
    "revision": "5ddd9c2fe5da99a44ffed074af72f469"
  },
  {
    "url": "assets/js/26.3c2bc624.js",
    "revision": "00805e6ff0b3e3ca3a3c397442a3b192"
  },
  {
    "url": "assets/js/27.833afeda.js",
    "revision": "fc0052f9b3f5028d550bc743f9f9bc1b"
  },
  {
    "url": "assets/js/28.0977961d.js",
    "revision": "8285ffc7c173156aae4763ef0db7f53d"
  },
  {
    "url": "assets/js/3.8e4ad667.js",
    "revision": "ad5a0537b7cb7466308d8c6329afd658"
  },
  {
    "url": "assets/js/4.73e86a45.js",
    "revision": "5a407d303176f2025844a0772ef9fcf7"
  },
  {
    "url": "assets/js/5.5549f803.js",
    "revision": "629db9643368911d17589e7f99989a42"
  },
  {
    "url": "assets/js/6.39802c70.js",
    "revision": "d3dd578701585e3e91729013c5ad124b"
  },
  {
    "url": "assets/js/7.b8d05ac9.js",
    "revision": "31e12521f8b5ffc7a6830598ffce6ce1"
  },
  {
    "url": "assets/js/8.9218d59a.js",
    "revision": "0c6307adb9fee29fc2d86a67f25936fe"
  },
  {
    "url": "assets/js/9.2142feca.js",
    "revision": "adba5a8bc715439b513df5f945607ec0"
  },
  {
    "url": "assets/js/app.28b7beba.js",
    "revision": "7db42b26120b8f1e8f2fdeb531405a40"
  },
  {
    "url": "config/index.html",
    "revision": "983677ee70e831a4922f7450087783ee"
  },
  {
    "url": "guide/index.html",
    "revision": "c2a62b552c823b1a4f01785ce45b3dce"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "b8cccc26bbbb0148184c575d38c20adc"
  },
  {
    "url": "javascript/1.html",
    "revision": "6a5ad59cc5e085b59f2febee54549961"
  },
  {
    "url": "javascript/index.html",
    "revision": "f9a7af6072a8dfc3294090fabef91064"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "8873e6b17c786ec1dc18ea2dde995927"
  },
  {
    "url": "react/index.html",
    "revision": "9d02662f7165c23eb8569534b0e4896f"
  },
  {
    "url": "Tests/index.html",
    "revision": "63b122ac972f83e96a88e0a521837444"
  },
  {
    "url": "typescript/1.html",
    "revision": "fb503cbf740668903ce62a0c396b1f98"
  },
  {
    "url": "typescript/2.html",
    "revision": "f1004ed6343a54fc0224f580ce88e44e"
  },
  {
    "url": "typescript/3.html",
    "revision": "a199f82be11148702be7d0c369d99e70"
  },
  {
    "url": "typescript/4.html",
    "revision": "85ad9cdf951162e7df0e33543b2694ad"
  },
  {
    "url": "typescript/5.html",
    "revision": "c1be812023a08bbcf82b05301b1d7c79"
  },
  {
    "url": "typescript/6.html",
    "revision": "91bb25ab3ab41ecd5cb6a4edec4d2220"
  },
  {
    "url": "typescript/7.html",
    "revision": "3b8de8bb16be091e73e45b89d884a7d5"
  },
  {
    "url": "typescript/index.html",
    "revision": "b09b48a72cbe54f8557547ec7d635a68"
  },
  {
    "url": "vue/index.html",
    "revision": "c4a608b75d6b8d8741d722e2f4e5379b"
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
