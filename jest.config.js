/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call */

const jestConfig = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  coverageReporters: ["lcov"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!<rootDir>/src/modules/settings/**/*.{ts,tsx}",
    "!<rootDir>/src/**/*.stories.{ts,tsx}",
    "!<rootDir>/src/index.tsx",
    "!<rootDir>/src/react-app-env.d.ts",
    "!<rootDir>/src/reportWebVitals.ts",
    "!<rootDir>/src/**/types/*",
    "!<rootDir>/src/components/form/types.ts",
    "!<rootDir>/src/lib/api/*",
    "!<rootDir>/src/routes/*",
    "!<rootDir>/src/lib/other/i18n.ts",
    "!<rootDir>/src/__mocks__",
  ],
  setupFiles: ["react-app-polyfill/jsdom"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": [
      "esbuild-jest",
      {
        jsxFactory: "jsx",
        sourcemap: true,
        loaders: {
          ".spec.js": "js",
          ".spec.jsx": "jsx",
          ".spec.ts": "ts",
          ".spec.tsx": "tsx",
        },
      },
    ],
    // "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!@antv).+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  modulePaths: ["/Users/bo/dev/tempusforce/mono/frontend/app/src"],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["web.js", "js", "web.ts", "ts", "web.tsx", "tsx", "json", "web.jsx", "jsx", "node"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  resetMocks: true,
};

if (process.env.CI) {
  jestConfig.testResultsProcessor = "jest-junit";
  jestConfig.coverageReporters = ["cobertura"];
}

module.exports = jestConfig;
