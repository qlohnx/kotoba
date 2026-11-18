const CACHE='kotoba-v3';
const ROOT=new URL('./',self.location.href).href;
const ASSETS=['./','index.html','style.css','words.js','script.js','manifest.webmanifest','icon.svg'].map(p=>new URL(p,ROOT).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('kotoba-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||!req.url.startsWith(ROOT))return;event.respondWith((async()=>{const cache=await caches.open(CACHE);if(req.mode==='navigate'){try{const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response}catch{return await cache.match(req)||await cache.match(new URL('index.html',ROOT).href)}}const stored=await cache.match(req);if(stored)return stored;const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response})())});
