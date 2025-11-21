module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.jsx',
    '<rootDir>/src/**/*.test.jsx'
  ]
};