module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.test.jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/setup.js'
  ]
};