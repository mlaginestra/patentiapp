'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "d6823677492e994f283f248648afb80a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b924256895b61794357fb7b4b5ba3931",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96aef7a3d7dbd811e7c44fdcffd1962c",
".git/logs/refs/heads/main": "6187548775a83d02625d828c20ebbf16",
".git/logs/refs/remotes/origin/main": "abc476e696df6f732edf4b74321d9bbe",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/0b942ebaefd55a834d0923255d6a2282df933c": "d82e950ab2fe7b77bdde5df565704939",
".git/objects/09/56e6cad95933099fe99250a003677a5387b81d": "7ba347c0a088a8afcf793dcf5a2d4f89",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/e5bbec7c46247961b8ae865b3412159afb7e1a": "05c7fd30fb525541a4eaa418b71bb392",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2c/0735ca6368bea1803efcad656bfb643bb9bc97": "a33639c8b28f39c3e4815fa3566fe862",
".git/objects/30/e91d5418f6d248f3234bcaa505349ec6299464": "04a8919839df24e7cedb55bb66be51d5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/513a17d5a957741afbbda187c2f471e0b50d22": "498478922a048d725cdd35423865bc84",
".git/objects/35/58edea5531faaeffde00156fc9fab572b0c295": "9f893e427e4c2835fa9fa443f6bd9687",
".git/objects/36/bfe08ba6ff1a5b643fe39b0988b6e5ad8a73bd": "8cbd17448a184265da7ad84ad902261c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/16ac092d1289974fb656ebaa76e867bf98a849": "0da4574a44b6efcf9f74a80c13bd1464",
".git/objects/4f/ae4b9d9211134e0437d48646533643f9b04d02": "800e7553d8941aa360dac72fdec51e18",
".git/objects/50/b6a788565596a4d910cefc38eaba2a3e5ae576": "9bb8a9a1977838f841b53b498efdb0bf",
".git/objects/51/71c63de1730ecf0d23e133ebf23b781dae3b17": "72e2dcb2e3d2d096469ffea74b30946b",
".git/objects/51/d7b706883c3ddca300276541cb50a76aa1937d": "f9b94ba6d39ed756d2298d1acd5216e2",
".git/objects/5a/1dcc3c1ece6e8179bab3016ca336ecb30c3cd1": "95f559e0d900ab260de2de81ad171671",
".git/objects/5c/61faf8d24c362dc3ec093eae89fe2a4aa60d73": "e5cc18c6b70a3fe1f7c5dac28099c402",
".git/objects/63/498d362ad7e67d00534ae2022e4c2e8ede15fa": "d7fb00b2a5d329740d5acaa505d7e7d6",
".git/objects/65/b274ed8baf7a9944c44e6ca047f9464b21668d": "27778629fca36f9067b2e15b1cf4e943",
".git/objects/6d/23b57447569cfb22945aebd4e66c2672d1dc32": "210687e55b0c71d1f7a224074bb4328e",
".git/objects/7a/bbf7791eeaaffc927da91471ce237eeefc4bec": "4ef6105397808956633b4d994b5af221",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/760342d3a1e6490439f2d4589b7dd40d1b0312": "42c6124942671ca26ed497a592465d66",
".git/objects/85/6d184f620e55ed4fbb602194cf63dd22987fde": "9a74a8a28c9cac844ffedf0acdb1cb87",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3ab4a5fd6d44f609c172a03598b1ffc7cf786e": "8990293f310f5b2c6d4224d1b59f6e51",
".git/objects/90/fa61cd45ca0113b68e68f400ac58d39be172e8": "7866fbb02b9e4935be48e153aad957bc",
".git/objects/9c/c898e4f8086b9ac493c2b536ac4b288ba39ffd": "c91662d7458315f774e9f598f954e2f1",
".git/objects/9d/7d75b00328a36a3776f2a1def629aa3872f880": "ae892103dc9e55c58d3aa5bd4cf61a49",
".git/objects/9e/ff6f27cf7bc46a466c104eb12b61de5bc63007": "282361144b22e8346e11c6d57de940c7",
".git/objects/9f/487703b813a68974e4414b9c3ad5b1f9f6ffb0": "8a96b6b43f65d96ddad7a271acbb28c4",
".git/objects/a6/08232a3c5395414e4c28545ba7c26548a29c81": "856768e0552f01bff6cd6cb818c4f4f0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b2/038e31ad90b2960cfea4dc0f1c1c7600d504be": "22154650839ae290db8f915211052b0d",
".git/objects/b5/89d93555e4e9280b8a6d1d1cc87a637f412e59": "44c7121df2e5f5dba5939b02ace5cc3b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/3ff0e3be99e0dc038d7404fac541f7ca9d982e": "cfeda17cbfcf4e010504adc8663af88c",
".git/objects/c0/aad282d99128e098641545c611b126c34c5a1d": "bd40a6560cc1fc59da6ac94aea938e2f",
".git/objects/c8/4c2c5b407de0880b8ccb8378a7820d9a02a4aa": "427dc54791366969b21b6d6086c11932",
".git/objects/cf/ea134be0f3431213a2b67fd4ab5d67c22edb70": "6b9ce6dd5899e7151272066eabdfd371",
".git/objects/d8/8e4264bbe50226078b396da735095a837cd370": "7f2efc53ed77a0077e3bf50b6928881b",
".git/objects/db/d6706eede4ae1a452df53591d982cb38efe976": "b703f098be057e896fcd8f52df865f54",
".git/objects/df/ec1b40f8049205f01f859f9cc00687591a5f5f": "920db098021a722aa1f80adf76f9633c",
".git/objects/e1/585bdcaf0770b669d5670dabfb354e4189f3d5": "069cfe96cb4e4b26ebe5305c4af32093",
".git/objects/ee/5237a5e8d75b1dc897867d56090a51c5355c0c": "811e33066f8d66001508d1cde27f57f8",
".git/objects/f7/4be6281a7caf745279b8397156770fe13f18ad": "57219e9c7c67d5c207054efe4d36e039",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/910f8e05dc53f287adbe4bedf4193405640aca": "2e225b48282832815e072c042673af47",
".git/objects/ff/197ff5dc7b7559817ed134558224d5bedbc1f9": "e109a57d3af5003f33d982881e114753",
".git/refs/heads/main": "a8b8c2e00be7bf19fbb49ecab3a59c34",
".git/refs/remotes/origin/main": "a8b8c2e00be7bf19fbb49ecab3a59c34",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e08e777f4cc7d074982c8009445a8757",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "376f8c19aafa35e7a83f27b4230ad574",
"/": "376f8c19aafa35e7a83f27b4230ad574",
"main.dart.js": "474e7d9c98ffc4b9ec9624d2e30221bf",
"manifest.json": "54baa0439cb3efe745f7e75186c6ce08",
"version.json": "4031a2d00455ccdb52eef892e529f19b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
