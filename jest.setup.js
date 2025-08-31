// jest.setup.js
import { TextEncoder, TextDecoder } from "util";

// Add global polyfills for Jest (Node <-> jsdom env gap)
if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder;
}
