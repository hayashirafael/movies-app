module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  setupFiles: [
    '<rootDir>/jest.config.js',
    '<rootDir>/__tests__/mocks/libs/async-storage.js',
    '<rootDir>/__tests__/mocks/libs/react-native-safe-area-context.js',
    '<rootDir>/__tests__/mocks/libs/react-navigation.js',
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|expo(nent)?|@expo(nent)?/.*|react-native|@react-navigation|@react-native-community))",
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/styles.ts",
    
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/@types",
    "<rootDir>/src/styles",
    "<rootDir>/src/libs/dayjs"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/mocks",
    "<rootDir>/__tests__/utils"
  ]
};
