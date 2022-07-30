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
    "revision": "cd2a9241834487f873f9bb5686e866d2"
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
    "url": "assets/js/13.c6161489.js",
    "revision": "9120f4c731563359e58964f0eada67ce"
  },
  {
    "url": "assets/js/14.a92d0c4d.js",
    "revision": "a8d710f1346ad7802ade00f851975c35"
  },
  {
    "url": "assets/js/15.8a12adf9.js",
    "revision": "1a03392986f95f6916885d654c64a44d"
  },
  {
    "url": "assets/js/16.2b63b08a.js",
    "revision": "11b95b349e83f43d2741594a2490c872"
  },
  {
    "url": "assets/js/17.8e349b14.js",
    "revision": "7c09328313fc6695d419be5a24c50b30"
  },
  {
    "url": "assets/js/18.cda93ac3.js",
    "revision": "ead976811be07e070be9896ea14d6133"
  },
  {
    "url": "assets/js/19.0a023f8c.js",
    "revision": "f2de6271f5c3c1c701b5024432a6c84f"
  },
  {
    "url": "assets/js/2.3b5d557f.js",
    "revision": "e0b427a9250fb25462ed2d279990682e"
  },
  {
    "url": "assets/js/20.19a15787.js",
    "revision": "722384b9fe5742837979421865933823"
  },
  {
    "url": "assets/js/21.4694ca9c.js",
    "revision": "5a737c79bd20435165cea8c3cacb4d00"
  },
  {
    "url": "assets/js/22.fe84d2f9.js",
    "revision": "80e6b6a94f021ea1d74f7169ddd054da"
  },
  {
    "url": "assets/js/23.36ea7898.js",
    "revision": "560c01e8ea62bb0b5570d13be0570aa1"
  },
  {
    "url": "assets/js/24.73eb756d.js",
    "revision": "def8b7b9cb63ce84806a84eaa9d9e4b8"
  },
  {
    "url": "assets/js/25.8fe92a16.js",
    "revision": "2c01bcfc32375c58b01be346bacf75b5"
  },
  {
    "url": "assets/js/26.7b7f62c0.js",
    "revision": "201e6e0ac76bfa1e7a58459c7c61b4df"
  },
  {
    "url": "assets/js/27.7009471e.js",
    "revision": "e88cad17b153fde6273536c90389a54a"
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
    "url": "assets/js/app.064cba8a.js",
    "revision": "712835b8ab16cb4500b8f3aa24abae05"
  },
  {
    "url": "config/index.html",
    "revision": "1a93a1391ab0d6b704e733f101553b43"
  },
  {
    "url": "guide/index.html",
    "revision": "df455af1e4c305970eb10de77b5dc6a7"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "8dbfca58dea5ac995d8eb03b9a919a23"
  },
  {
    "url": "javascript/1.html",
    "revision": "c9021a58c1234b85cad8794251cdc154"
  },
  {
    "url": "javascript/index.html",
    "revision": "6c5a2e62d946ac2779141c8b5793f06f"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "1c48a2bf0c804e75272ff36bf3d17c82"
  },
  {
    "url": "react/index.html",
    "revision": "24a0389940b09a021209ad4a7677f241"
  },
  {
    "url": "Tests/index.html",
    "revision": "60997cca3c797ff569d0f27d0c5143d8"
  },
  {
    "url": "typescript/1.html",
    "revision": "464e6c5053fb7998fe88c91921e910d7"
  },
  {
    "url": "typescript/2.html",
    "revision": "5f6496d30d2582e4296e830159e85982"
  },
  {
    "url": "typescript/3.html",
    "revision": "a75ee0c0b9a45a656b1244a80373cbb8"
  },
  {
    "url": "typescript/4.html",
    "revision": "dbe8b240445c0ba4bbf192ae2c1c3498"
  },
  {
    "url": "typescript/5.html",
    "revision": "8ea030be63a7d90e3d2dd27cf0c77862"
  },
  {
    "url": "typescript/6.html",
    "revision": "6d463fb624f257635f8e1963e5a84f2c"
  },
  {
    "url": "typescript/7.html",
    "revision": "aec3c0dfc5d494e5f1790e9c241c0b44"
  },
  {
    "url": "typescript/index.html",
    "revision": "f808f0083bc439acdf8f8fe9af3f094e"
  },
  {
    "url": "vue/index.html",
    "revision": "659f8fa91d90d572e3ea368d5991a1e1"
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
