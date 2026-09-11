import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safeguard against iframe/environment scripts assigning to window.fetch when it has only a getter
try {
  const nativeFetch = typeof window !== 'undefined' && window.fetch ? window.fetch.bind(window) : undefined;
  let currentFetch = nativeFetch;
  const descriptor = {
    get: () => currentFetch,
    set: (fn: typeof window.fetch) => {
      currentFetch = fn;
    },
    configurable: true,
    enumerable: true
  };
  try {
    Object.defineProperty(window, 'fetch', descriptor);
  } catch {
    // Ignore if already set
  }
  if (typeof Window !== 'undefined' && Window.prototype) {
    try {
      Object.defineProperty(Window.prototype, 'fetch', descriptor);
    } catch {
      // Ignore
    }
  }
} catch {
  // Ignore
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
