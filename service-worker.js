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
    "revision": "ab994f612896c443e2ffcc0c6be99144"
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
    "url": "assets/js/13.27102905.js",
    "revision": "a7b6a0d2781710b674e7f2b9909fabb0"
  },
  {
    "url": "assets/js/14.a92d0c4d.js",
    "revision": "a8d710f1346ad7802ade00f851975c35"
  },
  {
    "url": "assets/js/15.35eb926b.js",
    "revision": "d2b4e39616d6748ace2be5f64a2c6115"
  },
  {
    "url": "assets/js/16.266f8954.js",
    "revision": "90fd7c0bd8157976ee029e18f6828fa7"
  },
  {
    "url": "assets/js/17.8e349b14.js",
    "revision": "7c09328313fc6695d419be5a24c50b30"
  },
  {
    "url": "assets/js/18.ee094384.js",
    "revision": "a430083adb7123e9861925d9566ca954"
  },
  {
    "url": "assets/js/19.5ee367e8.js",
    "revision": "8e75ed47d7680e76995c48264b54a0d3"
  },
  {
    "url": "assets/js/2.3b5d557f.js",
    "revision": "e0b427a9250fb25462ed2d279990682e"
  },
  {
    "url": "assets/js/20.7b074084.js",
    "revision": "0ca8b1ad056bad80e691e78909d01124"
  },
  {
    "url": "assets/js/21.e40feaba.js",
    "revision": "7fc847f4186eb80bed5740ae7fd832d1"
  },
  {
    "url": "assets/js/22.079440b6.js",
    "revision": "0d8e9075342dfd2ac89d129a32d37881"
  },
  {
    "url": "assets/js/23.3e8184d4.js",
    "revision": "e5d0c28a67333795d45e75fb9e440d0b"
  },
  {
    "url": "assets/js/24.f9f9b2d2.js",
    "revision": "098e4ee6d875c910bd692bb2963326d3"
  },
  {
    "url": "assets/js/25.8fe92a16.js",
    "revision": "2c01bcfc32375c58b01be346bacf75b5"
  },
  {
    "url": "assets/js/26.7267dcdc.js",
    "revision": "a783af1116aa6f7790a2776938c4e052"
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
    "url": "assets/js/app.7173588d.js",
    "revision": "32d5364f3002994fef85a81f0418edcb"
  },
  {
    "url": "config/index.html",
    "revision": "30342c73be511db48cbd7f5a696a66ce"
  },
  {
    "url": "guide/index.html",
    "revision": "1859552d22323fb4bd6e729a950f8e62"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "7b46446a92f923dbc085f77a1556f982"
  },
  {
    "url": "javascript/1.html",
    "revision": "2680138d96a7e3cbc77bc07b4b0f07e9"
  },
  {
    "url": "javascript/index.html",
    "revision": "f52e437736142d741eee732915d88dac"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "caaf83f6ba2b7e37a8dec4279c948153"
  },
  {
    "url": "react/index.html",
    "revision": "0849b0a5e33dc42d68340b7600f90673"
  },
  {
    "url": "Tests/index.html",
    "revision": "ec7326fc30ba65c738252525b95e3280"
  },
  {
    "url": "typescript/1.html",
    "revision": "5cffdc6bf1fc32bf4951a39c2134538c"
  },
  {
    "url": "typescript/2.html",
    "revision": "77299510548850769d222a2397d788c0"
  },
  {
    "url": "typescript/3.html",
    "revision": "078d6fcd1d4b87572de367163749e9d3"
  },
  {
    "url": "typescript/4.html",
    "revision": "459d2d9905a4aff66a441c2883cbf592"
  },
  {
    "url": "typescript/5.html",
    "revision": "e1fb4004cfc17f8dea172400f055c67a"
  },
  {
    "url": "typescript/6.html",
    "revision": "2c919757b02555ae862525541c668dfc"
  },
  {
    "url": "typescript/7.html",
    "revision": "98387e239992d21281c16ce6d3e4f509"
  },
  {
    "url": "typescript/index.html",
    "revision": "7a15c6064d9275279a939c0771951de8"
  },
  {
    "url": "vue/index.html",
    "revision": "c22724d2a870e1621b01d62b5baac596"
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
