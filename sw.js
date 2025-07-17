/**
 * Service Worker for Performance Optimization
 * Implements caching strategies for better performance
 */

const CACHE_NAME = 'bright-liu-portfolio-v1';
const STATIC_CACHE_NAME = 'static-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-v1';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, then network
  CACHE_FIRST: 'cache-first',
  // Network first, then cache
  NETWORK_FIRST: 'network-first',
  // Cache only
  CACHE_ONLY: 'cache-only',
  // Network only
  NETWORK_ONLY: 'network-only',
  // Stale while revalidate
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Route-based caching strategies
const ROUTE_STRATEGIES = {
  // Static assets - cache first
  '/assets/': CACHE_STRATEGIES.CACHE_FIRST,
  // API calls - network first
  '/api/': CACHE_STRATEGIES.NETWORK_FIRST,
  // Images - stale while revalidate
  '\\.(jpg|jpeg|png|gif|webp|svg)$': CACHE_STRATEGIES.STALE_WHILE_REVALIDATE,
  // Fonts - cache first
  '\\.(woff|woff2|ttf|eot)$': CACHE_STRATEGIES.CACHE_FIRST,
  // CSS/JS - stale while revalidate
  '\\.(css|js)$': CACHE_STRATEGIES.STALE_WHILE_REVALIDATE
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install event');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate event');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  // Determine caching strategy
  const strategy = getCachingStrategy(request.url);
  
  event.respondWith(
    handleRequest(request, strategy)
  );
});

/**
 * Determine caching strategy for a URL
 */
function getCachingStrategy(url) {
  for (const [pattern, strategy] of Object.entries(ROUTE_STRATEGIES)) {
    if (new RegExp(pattern).test(url)) {
      return strategy;
    }
  }
  
  // Default strategy
  return CACHE_STRATEGIES.NETWORK_FIRST;
}

/**
 * Handle request with specified caching strategy
 */
async function handleRequest(request, strategy) {
  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      return cacheFirst(request);
      
    case CACHE_STRATEGIES.NETWORK_FIRST:
      return networkFirst(request);
      
    case CACHE_STRATEGIES.CACHE_ONLY:
      return cacheOnly(request);
      
    case CACHE_STRATEGIES.NETWORK_ONLY:
      return networkOnly(request);
      
    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      return staleWhileRevalidate(request);
      
    default:
      return networkFirst(request);
  }
}

/**
 * Cache first strategy
 */
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache first failed:', error);
    throw error;
  }
}

/**
 * Network first strategy
 */
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

/**
 * Cache only strategy
 */
async function cacheOnly(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  throw new Error('No cached response available');
}

/**
 * Network only strategy
 */
async function networkOnly(request) {
  return fetch(request);
}

/**
 * Stale while revalidate strategy
 */
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  // Start network request in background
  const networkPromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch((error) => {
    console.log('Background network request failed:', error);
  });
  
  // Return cached response immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // If no cached response, wait for network
  return networkPromise;
}

/**
 * Message handler for cache management
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    clearAllCaches();
  }
});

/**
 * Clear all caches
 */
async function clearAllCaches() {
  const cacheNames = await caches.keys();
  
  return Promise.all(
    cacheNames.map((cacheName) => caches.delete(cacheName))
  );
}

/**
 * Background sync for offline functionality
 */
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync logic
      console.log('Background sync triggered')
    );
  }
});

/**
 * Push notification handler
 */
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      tag: 'portfolio-notification'
    };
    
    event.waitUntil(
      self.registration.showNotification('Portfolio Update', options)
    );
  }
});

/**
 * Handle notification clicks
 */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

console.log('Service Worker: Loaded and ready');