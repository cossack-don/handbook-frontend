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
    "revision": "0597e2fc964cfa4c1a12ee93144f1e32"
  },
  {
    "url": "assets/css/0.styles.6494dea2.css",
    "revision": "7ad51b119b741320579bd18169337e76"
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
    "url": "assets/js/12.fc7b33e4.js",
    "revision": "d2ad36d1768adc05e64dc74abd9a0dcf"
  },
  {
    "url": "assets/js/13.c6161489.js",
    "revision": "9120f4c731563359e58964f0eada67ce"
  },
  {
    "url": "assets/js/14.e1a2d8c0.js",
    "revision": "57190e7c4340aa71c1aefa2d7ed738db"
  },
  {
    "url": "assets/js/15.c23eb4fd.js",
    "revision": "58591a5512c793bbdf3235a2d498c291"
  },
  {
    "url": "assets/js/16.2b694d4a.js",
    "revision": "02184295ba433e63c2780fffd2538811"
  },
  {
    "url": "assets/js/17.7c2c79aa.js",
    "revision": "38b7a52f11b31f7f38f4032b5f23144e"
  },
  {
    "url": "assets/js/18.928b3c97.js",
    "revision": "e3ec7c744ca2764c3407accaaeaae81f"
  },
  {
    "url": "assets/js/19.8b823216.js",
    "revision": "2b6b080e29101639036366aef2722c30"
  },
  {
    "url": "assets/js/2.3b5d557f.js",
    "revision": "e0b427a9250fb25462ed2d279990682e"
  },
  {
    "url": "assets/js/20.653d9155.js",
    "revision": "c01534e7e4ee1cecedffe90f3e9014e6"
  },
  {
    "url": "assets/js/21.42424c17.js",
    "revision": "3052eeb71a48d2715900c9d107664714"
  },
  {
    "url": "assets/js/22.3fde05ef.js",
    "revision": "cff8f773b37e2833e2091199f422888c"
  },
  {
    "url": "assets/js/23.e1c4ae0d.js",
    "revision": "2636b368f2d891185a60a6fe4e49dcdb"
  },
  {
    "url": "assets/js/24.e0d3ebc2.js",
    "revision": "9b1135e280ba0c5a5d82149e03c0fabe"
  },
  {
    "url": "assets/js/25.74aa481d.js",
    "revision": "5620cdc4a4c2c4524a0e1a7a21f08b92"
  },
  {
    "url": "assets/js/26.33b1f7a7.js",
    "revision": "90abd10af97f3b3ab9e6391d2f1d59bd"
  },
  {
    "url": "assets/js/27.f22100a8.js",
    "revision": "6bc50b45389115c3fd066afd4f775b18"
  },
  {
    "url": "assets/js/28.94a0adbf.js",
    "revision": "202b4669538912fb80520872cb551648"
  },
  {
    "url": "assets/js/29.b116db9a.js",
    "revision": "e734db0012bb03fd201d3d6f465cd2d7"
  },
  {
    "url": "assets/js/3.8e4ad667.js",
    "revision": "ad5a0537b7cb7466308d8c6329afd658"
  },
  {
    "url": "assets/js/4.3d461ea7.js",
    "revision": "5a9e267261b4fb94467a92b7c632af01"
  },
  {
    "url": "assets/js/5.d77f7b94.js",
    "revision": "05e3c2880ce9be951b14e90ce9372be3"
  },
  {
    "url": "assets/js/6.ca08ddec.js",
    "revision": "cd1eae5eb7d9fdff912a994a9d143721"
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
    "url": "assets/js/app.eb408789.js",
    "revision": "ba8e21be61964b72d0871301d362a9e1"
  },
  {
    "url": "config/index.html",
    "revision": "11c4bfe692b06ac4357292e01778ea7e"
  },
  {
    "url": "config/usefulServices.html",
    "revision": "f2a8ea390397565e745ce0b1794f1232"
  },
  {
    "url": "guide/index.html",
    "revision": "4f03c0f4739f7059ebcc1ecdf24ca616"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "a099d41926602cb5cb6eb1f4a6892f0a"
  },
  {
    "url": "javascript/1.html",
    "revision": "5f008aaa60cf26f71317b2e5a074bebd"
  },
  {
    "url": "javascript/index.html",
    "revision": "6b0097569810b99aaea8307cbfd4b01e"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "d41ac6f76ba2729af0562bc3b3032251"
  },
  {
    "url": "logo-no-text.svg",
    "revision": "61d3e74f51d91a03d27d7827fd0e7512"
  },
  {
    "url": "logo.svg",
    "revision": "1bb0c92c521b41de1ec964822627e3f6"
  },
  {
    "url": "react/index.html",
    "revision": "752d3a8720247f9f44e465d5ead97144"
  },
  {
    "url": "test.svg",
    "revision": "555825333152d567ce2492a5d0da6f4e"
  },
  {
    "url": "Tests/index.html",
    "revision": "9c8ba2d3d0e72ad1912b6270e7b01cf0"
  },
  {
    "url": "typescript/1.html",
    "revision": "7f838b586e4215355b4de4d774ef6b37"
  },
  {
    "url": "typescript/2.html",
    "revision": "23daa8636e2ce51e1be5c82a6cfb0316"
  },
  {
    "url": "typescript/3.html",
    "revision": "7c34c570eb7115050854ac0195d85c7c"
  },
  {
    "url": "typescript/4.html",
    "revision": "26e6c3a2ae0ba7ca91d15f5eb959f1c7"
  },
  {
    "url": "typescript/5.html",
    "revision": "171793a53919aff771ff32a85c259a4e"
  },
  {
    "url": "typescript/6.html",
    "revision": "c0b7118219589990ce2e498e5ef80be2"
  },
  {
    "url": "typescript/7.html",
    "revision": "468072137f8f4bdb4edfc09a0fa54942"
  },
  {
    "url": "typescript/index.html",
    "revision": "35049969632e9a6a35d0f6c90b2b0d32"
  },
  {
    "url": "vue/index.html",
    "revision": "ee26794e1df507e2058f11f9f096037f"
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
