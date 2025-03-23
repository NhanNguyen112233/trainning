module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom'
};