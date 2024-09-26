module.exports = {
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'], // Matches any .js, .jsx, .ts, .tsx files in __tests__ directory
  testPathIgnorePatterns: [
    '/node_modules/', // Ignores node_modules
    '/dist/', // Ignores dist
  ],
  coveragePathIgnorePatterns: [
    'reportWebVitals.ts', // Ignores reportWebVitals.ts
    'src/index.tsx', // Ignores src/index.tsx
  ],
};
