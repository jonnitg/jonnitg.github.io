module.exports = {
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    // XXX we must specify a custom tsconfig for tests because we need the typescript transform
    //  to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    //  can see this setting in tsconfig.jest.json -> "jsx": "react"
    //  See https://github.com/zeit/next.js/issues/8663
    'ts-jest': {
      tsConfig: 'jest.tsconfig.json',
    },
  },
  setupFiles: ['./enzyme.config.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@elements(.*)$': '<rootDir>/src/elements$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
  },
};
