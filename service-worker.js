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
    "revision": "d6e57001d0a75cb5c27aba6c6f9619a6"
  },
  {
    "url": "assets/css/0.styles.25e262e2.css",
    "revision": "8f7a6415eadfe5e8ce65054aea4e15f8"
  },
  {
    "url": "assets/img/1.c4899934.png",
    "revision": "c48999346e69607ab127a7aa34e609d5"
  },
  {
    "url": "assets/img/10.e5aacc83.jpg",
    "revision": "e5aacc83ac91806b19d19e5ce91bce8f"
  },
  {
    "url": "assets/img/2.ef144eb5.png",
    "revision": "ef144eb51b9fc9cda0c9e24c10e98502"
  },
  {
    "url": "assets/img/3.b0c99292.png",
    "revision": "b0c99292eb4027b4530bde167ee25e1d"
  },
  {
    "url": "assets/img/5.1e943bb5.jpg",
    "revision": "1e943bb5db2afd4acacdd81fb07cef1f"
  },
  {
    "url": "assets/img/7.7ca42d12.png",
    "revision": "7ca42d12ab8f0f186a9c4c23f0d3c5b1"
  },
  {
    "url": "assets/img/8.194ece33.jpg",
    "revision": "194ece33ff6b0f53c86d94b0caba602a"
  },
  {
    "url": "assets/img/9.5f41d964.jpg",
    "revision": "5f41d964387e5999eb3273351a0c1278"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.40d98fe4.js",
    "revision": "b7b920654285f2acce24eebe6e8bbf7b"
  },
  {
    "url": "assets/js/11.beffe099.js",
    "revision": "ec843128e2954954edb834e8817ee5e1"
  },
  {
    "url": "assets/js/12.fe6ecaec.js",
    "revision": "f4eedfcf3db63b76d4ba2ad3080817ee"
  },
  {
    "url": "assets/js/13.9b99ee19.js",
    "revision": "1cd04d6256ee94e227ccb603a5b9ce38"
  },
  {
    "url": "assets/js/14.2e34aaab.js",
    "revision": "e99f9041c2f1ff4c1450ac740d2b92bb"
  },
  {
    "url": "assets/js/15.4156a4d3.js",
    "revision": "b9dec9553880bf10db1c308604e75784"
  },
  {
    "url": "assets/js/16.88c35a5b.js",
    "revision": "d9b575175531405b355c9449aec70ca8"
  },
  {
    "url": "assets/js/17.7e4344e4.js",
    "revision": "f375ac98fb27b9ca97d3eee401c1801c"
  },
  {
    "url": "assets/js/18.c8799f8a.js",
    "revision": "d4389ac9d7beca6c7d75d2cca9bb9632"
  },
  {
    "url": "assets/js/19.2851c79a.js",
    "revision": "16c322dd94597ae3d60df8f3741c0edb"
  },
  {
    "url": "assets/js/2.d790b1c7.js",
    "revision": "f7bc1412e14c9eb6afb33276afc7c9f2"
  },
  {
    "url": "assets/js/20.61542092.js",
    "revision": "5d278c96a88cd15ad454dc454d8b8d16"
  },
  {
    "url": "assets/js/21.1b995b0f.js",
    "revision": "6f5bb5bfeba7e127fb844030de6c9922"
  },
  {
    "url": "assets/js/22.fa2834f7.js",
    "revision": "269237dbc6dc290d5d133c718fe3be16"
  },
  {
    "url": "assets/js/23.4a8be632.js",
    "revision": "f7d9b8977993fa685c915937d6a2b151"
  },
  {
    "url": "assets/js/24.e5e8b3c2.js",
    "revision": "f2aa6e5505aa8eaa31bdaffa2fd233a7"
  },
  {
    "url": "assets/js/25.f06e52f8.js",
    "revision": "38a295c86aa583acee3020d0ed1d875a"
  },
  {
    "url": "assets/js/26.f8a7521e.js",
    "revision": "405f34ccdb240e980eaddba19a9dec7d"
  },
  {
    "url": "assets/js/27.3ae4f954.js",
    "revision": "65fa0476f7f42d2488c9aa2d76210d75"
  },
  {
    "url": "assets/js/28.6589ed13.js",
    "revision": "6783b758431a1e7730923150d5d1a12c"
  },
  {
    "url": "assets/js/29.4f88666f.js",
    "revision": "adb80ee109a7c3f66e5a0deb431f3589"
  },
  {
    "url": "assets/js/3.53a46cbb.js",
    "revision": "433363611e48377296cb17564a366c13"
  },
  {
    "url": "assets/js/30.2c63bf86.js",
    "revision": "153a059f911f8a46aaed742ef81f16b2"
  },
  {
    "url": "assets/js/31.65a820d3.js",
    "revision": "dfabd60a6ec7dab621ba048e4c36bd4b"
  },
  {
    "url": "assets/js/32.147b820f.js",
    "revision": "1f746e87175a6213026e15295d9be5a0"
  },
  {
    "url": "assets/js/33.9608421a.js",
    "revision": "eca017bd9cdc48ef036d2118a2187ad1"
  },
  {
    "url": "assets/js/34.69df488e.js",
    "revision": "aa068575b8e5a7cd2276075829b124eb"
  },
  {
    "url": "assets/js/35.54254ecf.js",
    "revision": "0d9e73ed4761eaef02496d08e42a9bd1"
  },
  {
    "url": "assets/js/36.17715f6f.js",
    "revision": "7cf7ae1b7fbc258133be95963fc5e175"
  },
  {
    "url": "assets/js/37.5c78ba79.js",
    "revision": "38387490b1dc2058c7cfcb49a55f4498"
  },
  {
    "url": "assets/js/38.827e0358.js",
    "revision": "d721211e87d92f32e813333ce6e1e9d6"
  },
  {
    "url": "assets/js/39.8e889c65.js",
    "revision": "10101aa94479e8d0d4a376afc91686a8"
  },
  {
    "url": "assets/js/4.1d4b8f86.js",
    "revision": "86922993f7812afef260752f407e41d0"
  },
  {
    "url": "assets/js/40.9a1e3c81.js",
    "revision": "c55aac3facbfd6760cb274d7decb555a"
  },
  {
    "url": "assets/js/41.0e70f707.js",
    "revision": "4f8df72506135874d8ab1377824a44a6"
  },
  {
    "url": "assets/js/42.3490b738.js",
    "revision": "828de594a1a6c74ca3c03d467cb5c202"
  },
  {
    "url": "assets/js/43.aa64bf30.js",
    "revision": "a579f9f1cb37ce0bceba3552d64e8b03"
  },
  {
    "url": "assets/js/44.00c5fed2.js",
    "revision": "662f507ad96838164cfe93bf450efeb3"
  },
  {
    "url": "assets/js/5.79493704.js",
    "revision": "1cdacff4da82effb4b08615dd006c16d"
  },
  {
    "url": "assets/js/6.57a604ba.js",
    "revision": "87a38c09a1aa6cd715d3d9cb0f8a6173"
  },
  {
    "url": "assets/js/7.73348ac6.js",
    "revision": "d4a210b06329fdc6c855c857a0b52767"
  },
  {
    "url": "assets/js/8.a61e7127.js",
    "revision": "72e99f3320add03515c5fa1b300abd19"
  },
  {
    "url": "assets/js/9.9222d0b0.js",
    "revision": "d100a5bf7d9e1517a9fe93cc93e46b23"
  },
  {
    "url": "assets/js/app.30b5edfa.js",
    "revision": "a861f60173a653880c8c84f154627959"
  },
  {
    "url": "config/index.html",
    "revision": "ada19841921f5d0655576be5ef901068"
  },
  {
    "url": "guide/css/1.html",
    "revision": "6fde9c672e01a51cd908c1da8ec85f9d"
  },
  {
    "url": "guide/html/1.html",
    "revision": "49d9db5d58df9516937aad43d0e656dc"
  },
  {
    "url": "guide/html/2.html",
    "revision": "6a300405191d303036187cdd180feb5d"
  },
  {
    "url": "guide/html/3.html",
    "revision": "78c80769ba2e05d8314a0867469191f7"
  },
  {
    "url": "guide/html/5.html",
    "revision": "a79a1316d9dcf8cbf62a84f931b7e2bd"
  },
  {
    "url": "guide/html/6.html",
    "revision": "cd9cee5dc94e22166ba1568c1bbcf011"
  },
  {
    "url": "guide/html/7.html",
    "revision": "1d370d362a2eb4f80fa0457f58919314"
  },
  {
    "url": "guide/html/8.html",
    "revision": "936d2af4dcb30a94942712285f9ad8b2"
  },
  {
    "url": "guide/html/9.html",
    "revision": "8fe633918d38cc7302f2a983c4f013a1"
  },
  {
    "url": "guide/index.html",
    "revision": "54a1cf65bf23560c00f7bf3423944936"
  },
  {
    "url": "guide/js/1.html",
    "revision": "8676b244a2991dc319ad8d72247666e2"
  },
  {
    "url": "guide/js/2.html",
    "revision": "45baaf7846eb45ef5b558e619e8354f4"
  },
  {
    "url": "guide/js/3.html",
    "revision": "a7f757d44bcd4bf0403554a76fa40a54"
  },
  {
    "url": "guide/js/4.html",
    "revision": "3d2f8da57f1b9ed18b648586d3277043"
  },
  {
    "url": "guide/js/5.html",
    "revision": "a56265ac3caae5434ba1e2d693282ccf"
  },
  {
    "url": "guide/js/6.html",
    "revision": "48e4e7b53ecbd1b72f1dfdca6898afd7"
  },
  {
    "url": "guide/js/7.html",
    "revision": "effc7bfc35119fdea4a28c2de18d4df6"
  },
  {
    "url": "guide/start.html",
    "revision": "aa50a05f8061d65893448b85d5b54edd"
  },
  {
    "url": "guide/start/1.html",
    "revision": "8c444385a7a93e3724c33ae0dbf3cd4f"
  },
  {
    "url": "guide/start/2.html",
    "revision": "a477680ddaa27173d8700af740dcc38e"
  },
  {
    "url": "guide/start/3.html",
    "revision": "eda96da13210031f6c8be5e8b63773c4"
  },
  {
    "url": "guide/start/4.html",
    "revision": "5fc93c6d4e0c0f94e87a8d028899f511"
  },
  {
    "url": "guide/start/5.html",
    "revision": "b8ac19f37539e5c071af643b0c76de56"
  },
  {
    "url": "guide/start/6.html",
    "revision": "c1aec4881905c64e94db0f72ced92c2a"
  },
  {
    "url": "guide/start/7.html",
    "revision": "1ab5dce5c306d66e516941b323995b75"
  },
  {
    "url": "guide/test-vue.html",
    "revision": "c844d44b1d6a422cd26eb56c41efceec"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "f7326f3ac656145939dce7e8e039722e"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "287fe58761f10f1eb5e45a2e99ac5629"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "fc211aa77088490742ad026942675667"
  },
  {
    "url": "react/index.html",
    "revision": "bcd4193594ebb569d99108f73af81d6a"
  },
  {
    "url": "react/test-vue.html",
    "revision": "3ef486e1efdf0cf1195fbcdc1b347283"
  },
  {
    "url": "react/using-vue.html",
    "revision": "a3749cfba41f272a0b3386ffad4be797"
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
