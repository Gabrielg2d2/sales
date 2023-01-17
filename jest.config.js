module.exports = {
  roots: ['src'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/?(*.)+(spec|test).(js|jsx|ts|tsx)'],
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**',
    '!src/*.d.ts',
    '!src/App.tsx',
    '!src/components/index.ts',
    '!**/domain/**',
    '!src/index.tsx',
    '!src/global/types/**/*',
    '!src/global/functions/index.ts', // export
    '!src/data-layer/sales/use_cases/index.ts' // export
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageProvider: 'v8',
  maxWorkers: '50%',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': ['jest-transform-css', { modules: true }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js'
  }
}
