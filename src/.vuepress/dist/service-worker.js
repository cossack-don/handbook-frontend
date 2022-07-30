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
    "revision": "534774747c9f58da49e0481116d8e63b"
  },
  {
    "url": "assets/css/0.styles.766911a7.css",
    "revision": "ee34e4de04332993a56e15a94d116e24"
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
    "url": "assets/js/11.57477385.js",
    "revision": "9bd9e3c0679a476abdc0b0c70b28d3aa"
  },
  {
    "url": "assets/js/12.10426a70.js",
    "revision": "ce44d17831316d511740f71a197141b9"
  },
  {
    "url": "assets/js/13.363eddc2.js",
    "revision": "262f25b288f2633fdec04d41a88168af"
  },
  {
    "url": "assets/js/14.c63128cd.js",
    "revision": "56271ed0822dab73167fa041aad9d9d3"
  },
  {
    "url": "assets/js/15.8a12adf9.js",
    "revision": "1a03392986f95f6916885d654c64a44d"
  },
  {
    "url": "assets/js/16.7e297e21.js",
    "revision": "80dc18df4ec0ebcf498d49dda94cb321"
  },
  {
    "url": "assets/js/17.951d563f.js",
    "revision": "dad79d08191688edf3db9b6be0273fb0"
  },
  {
    "url": "assets/js/18.8b2fc94b.js",
    "revision": "b7d6e2d10048ccc344439b0fee749269"
  },
  {
    "url": "assets/js/19.33e9d80a.js",
    "revision": "aa3b50266f8cd176026cfb9dff7030df"
  },
  {
    "url": "assets/js/2.3b5d557f.js",
    "revision": "e0b427a9250fb25462ed2d279990682e"
  },
  {
    "url": "assets/js/20.dc72dd06.js",
    "revision": "b268386a1d7d7bce1f972b87372886e4"
  },
  {
    "url": "assets/js/21.206bc19d.js",
    "revision": "82c626d635819af54cfd4f3d732e3ebe"
  },
  {
    "url": "assets/js/22.fe84d2f9.js",
    "revision": "80e6b6a94f021ea1d74f7169ddd054da"
  },
  {
    "url": "assets/js/23.cb8c71ad.js",
    "revision": "21c06273525596741c0c0c0af8928307"
  },
  {
    "url": "assets/js/24.73eb756d.js",
    "revision": "def8b7b9cb63ce84806a84eaa9d9e4b8"
  },
  {
    "url": "assets/js/25.f5f21b4d.js",
    "revision": "d06cc04ad57521bcc889d4901749902d"
  },
  {
    "url": "assets/js/26.ff325605.js",
    "revision": "88ad8802a91cdecf009df7ad3fd54600"
  },
  {
    "url": "assets/js/27.17ab4882.js",
    "revision": "5b3d8e6045f3a1c25d02b724043dbf23"
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
    "url": "assets/js/5.d77f7b94.js",
    "revision": "05e3c2880ce9be951b14e90ce9372be3"
  },
  {
    "url": "assets/js/6.2db5a0bb.js",
    "revision": "5898bdfa54fe20ceba50bbb2a25abf9b"
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
    "url": "assets/js/app.f78b4dbb.js",
    "revision": "94fac38e8707e18f9b7a90af64fa526f"
  },
  {
    "url": "config/index.html",
    "revision": "2d0f204b80d849737b670d5f68a1a8dd"
  },
  {
    "url": "guide/index.html",
    "revision": "497cfaa9dfeb0aa015f3db43e22773c9"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "89cf97b2bc575b8219b7339b4b66b262"
  },
  {
    "url": "javascript/1.html",
    "revision": "ae471bdd4b67b9f1b09262358bfcf3c5"
  },
  {
    "url": "javascript/index.html",
    "revision": "9a6ec289772d267b1957b86aec87bc44"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "dbac8f1c20326bc769de701020e48aa0"
  },
  {
    "url": "react/index.html",
    "revision": "815b0b908ba2f5dc6e7e13d6d652acb5"
  },
  {
    "url": "Tests/index.html",
    "revision": "1e01a7baf97219facfac0abbafedebc8"
  },
  {
    "url": "typescript/1.html",
    "revision": "6d234316daf592ac990f1fee11eb54b5"
  },
  {
    "url": "typescript/2.html",
    "revision": "c2ac7ddb025404111b9b7df5bff71669"
  },
  {
    "url": "typescript/3.html",
    "revision": "634d7b9c8c4b9ff74698674724b9b84d"
  },
  {
    "url": "typescript/4.html",
    "revision": "60899f174c1a49e770d40effa604f296"
  },
  {
    "url": "typescript/5.html",
    "revision": "03c33a1c32fab5a5d5e810db19ee455f"
  },
  {
    "url": "typescript/6.html",
    "revision": "9318ab4e705bd7b6be8144b4f724aa7e"
  },
  {
    "url": "typescript/7.html",
    "revision": "349562217799e852dcaa3a3d4447b648"
  },
  {
    "url": "typescript/index.html",
    "revision": "3967d8d73c284abc59e98dabddb0e50a"
  },
  {
    "url": "vue/index.html",
    "revision": "fb94b8d8b56fe00a8027fe397e580b61"
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
