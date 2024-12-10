// render(() => )
import '@testing-library/jest-dom/vitest';

// React undefined
import React from 'react';
global.React = React;

// window.matchMedia is not a function
import { vi } from 'vitest';
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
