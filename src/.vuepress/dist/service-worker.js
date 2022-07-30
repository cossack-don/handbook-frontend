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
    "revision": "fbde1e4acb908a5f5f4e44f4560b8ea6"
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
    "url": "assets/js/14.9c75d686.js",
    "revision": "1174b5c125d70a65b898e9297b1ea5d4"
  },
  {
    "url": "assets/js/15.84bed12c.js",
    "revision": "99cdbec849939bf22d57ef46136d308f"
  },
  {
    "url": "assets/js/16.233dcbea.js",
    "revision": "1aaf0dbdc873cd858aa72bb757daf9fc"
  },
  {
    "url": "assets/js/17.d37b1c50.js",
    "revision": "7686d8898a6740b3e12dd7f03031216b"
  },
  {
    "url": "assets/js/18.ee094384.js",
    "revision": "a430083adb7123e9861925d9566ca954"
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
    "url": "assets/js/20.dc477f4f.js",
    "revision": "361939787ad9e00af2a3affe8d47aaf0"
  },
  {
    "url": "assets/js/21.b6dea582.js",
    "revision": "92c3204c8f1e6e77f7eb3c9e8d666b20"
  },
  {
    "url": "assets/js/22.cd21e97d.js",
    "revision": "82cc2f7a26476dff3079eb798266e15e"
  },
  {
    "url": "assets/js/23.a7acaf63.js",
    "revision": "f81c04f4093df62ee7ca9d97122044fa"
  },
  {
    "url": "assets/js/24.0771891d.js",
    "revision": "4516eec3fbddfb2bb7dd4b165689c67d"
  },
  {
    "url": "assets/js/25.8fe92a16.js",
    "revision": "2c01bcfc32375c58b01be346bacf75b5"
  },
  {
    "url": "assets/js/26.0724c369.js",
    "revision": "f2bf5ebc1882bf5c24901bc606edb1c7"
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
    "url": "assets/js/app.7e79726a.js",
    "revision": "198743f5eb11c1bcc6a2817c1fd427ea"
  },
  {
    "url": "config/index.html",
    "revision": "42e1a251deb10040fe95354a5bf07752"
  },
  {
    "url": "guide/index.html",
    "revision": "11f15f86e8d7a510b2b3e5dcbd3941f9"
  },
  {
    "url": "home.png",
    "revision": "405d633f560fc614073f0a74e78bb25a"
  },
  {
    "url": "index.html",
    "revision": "b4f7b6ec7c3d1a53611b5c70a8f04337"
  },
  {
    "url": "javascript/1.html",
    "revision": "0e3ad33a57fe0c63b80119b58e5e4c0d"
  },
  {
    "url": "javascript/index.html",
    "revision": "9340778fa27d0c3036bfedd619550e13"
  },
  {
    "url": "LINKS_FOR_LERN_VUEPRESS.html",
    "revision": "e6946ed0a3a83517cd23650dc1e17228"
  },
  {
    "url": "react/index.html",
    "revision": "aada2a73fb9264c20812e65fdfcf1b46"
  },
  {
    "url": "Tests/index.html",
    "revision": "feb3bd64c5fe8526c1a236b5ebd8caee"
  },
  {
    "url": "typescript/1.html",
    "revision": "fa1303edd6fd6a7e1b3cce15dae780aa"
  },
  {
    "url": "typescript/2.html",
    "revision": "b36b3ee8d4fa2c18eb9463c7fba78edf"
  },
  {
    "url": "typescript/3.html",
    "revision": "983ee7f3ff8c0e491dbc6eb5bb8614a2"
  },
  {
    "url": "typescript/4.html",
    "revision": "68103a43f5e8c1c6bd44dd801a12a0a2"
  },
  {
    "url": "typescript/5.html",
    "revision": "31147454d3676fa6865899e018d89cca"
  },
  {
    "url": "typescript/6.html",
    "revision": "4697a1bc205e5f0098a5bac688f6df84"
  },
  {
    "url": "typescript/7.html",
    "revision": "b19c791a05db9453f52ed7f880c613fb"
  },
  {
    "url": "typescript/index.html",
    "revision": "8a1a8888a676c08a156756877ab0de53"
  },
  {
    "url": "vue/index.html",
    "revision": "3835aea11c93e3e9414535b2a4545b51"
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
