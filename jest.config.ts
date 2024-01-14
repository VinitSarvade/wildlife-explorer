export default {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/testing-utils/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/testing-utils/cssMock.ts',
  },
  setupFilesAfterEnv: ['./testing-utils/setupTests.ts'],
  moduleFileExtensions: [
    'tsx',
    'ts',
    'web.js',
    'js',
    'web.ts',
    'web.tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  modulePaths: ['<rootDir>/src'],
};
