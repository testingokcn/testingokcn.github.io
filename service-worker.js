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
    "url": "2020/01/11/programming-language-python3-1/index.html",
    "revision": "d9e18a98bbd64ec32e04c87103d970d5"
  },
  {
    "url": "2020/01/11/programming-language-python3-2/index.html",
    "revision": "74e4997188d1d5827d1a14e129740f64"
  },
  {
    "url": "404.html",
    "revision": "7f6b37daeba97d0af20b90508cbd833d"
  },
  {
    "url": "assets/css/0.styles.3fe07571.css",
    "revision": "aaf627c4b611e2b2449595cec189f5a9"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8c6bd555.js",
    "revision": "4e8b08f9e086770e7026c2149474bdb5"
  },
  {
    "url": "assets/js/11.8ee850b7.js",
    "revision": "11d061573dc71d5fba85a5879dff957d"
  },
  {
    "url": "assets/js/12.61d96395.js",
    "revision": "59e5d33b108b39685ead02438f1c2ef4"
  },
  {
    "url": "assets/js/13.97435ee7.js",
    "revision": "20d36570d370efcf6252708e8feaf506"
  },
  {
    "url": "assets/js/14.415245e6.js",
    "revision": "439d7c9a4604d13c223050db2017bb06"
  },
  {
    "url": "assets/js/15.a81cfff8.js",
    "revision": "642712d3f139ab3a06d966ff7823d77c"
  },
  {
    "url": "assets/js/16.23e9f756.js",
    "revision": "89f39972c4d4c9beeb77f4708b098e1a"
  },
  {
    "url": "assets/js/3.3635a018.js",
    "revision": "a830f7a25aac9e95f09c6bb8ccbc08a8"
  },
  {
    "url": "assets/js/4.1bbacf32.js",
    "revision": "1c20be82826ffdc50f3478877e09fe96"
  },
  {
    "url": "assets/js/5.665da45e.js",
    "revision": "efb5bab3a95c4f6d486cd7362f0960c6"
  },
  {
    "url": "assets/js/6.47a8d71a.js",
    "revision": "7211c0b5e3e7410a6628b02928537bfb"
  },
  {
    "url": "assets/js/7.e04d8aab.js",
    "revision": "253f457602380160d7638eb3f26b2d56"
  },
  {
    "url": "assets/js/8.64108805.js",
    "revision": "fe502a0464bc10c425de8f7f9b9e0515"
  },
  {
    "url": "assets/js/9.f91687de.js",
    "revision": "3a508e31ae21cf0787668444e779091d"
  },
  {
    "url": "assets/js/app.2e3867f6.js",
    "revision": "285689c322fa59c95f7b416a17a7277a"
  },
  {
    "url": "assets/js/vuejs-paginate.83765843.js",
    "revision": "249c95f46b56cdb811edffa4aa30e03e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/cat/1.jpg",
    "revision": "bb59fee5ce17ba5a8173e4c60c5fb884"
  },
  {
    "url": "img/cat/2.jpg",
    "revision": "28dd1531c213227f1a71cfa980c150c8"
  },
  {
    "url": "index.html",
    "revision": "389bfc8684adfe82514f6fe745d680f9"
  },
  {
    "url": "logo.png",
    "revision": "c53149b364e53c3f4b7da08ae693722a"
  },
  {
    "url": "me/index.html",
    "revision": "0bb261a2b5f4dfbaa00df2a94120fdd0"
  },
  {
    "url": "tag/index.html",
    "revision": "5c5cda8a17684ce2bceebfba9ca63a5e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "21886351bf29e5ed09ffc7c74272c498"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3e3f6c3e966eef8b961c6512a9671457"
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
