module.exports = async () => {
  return {
    verbose: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    moduleFileExtensions: ['js', 'jsx', 'json', 'css'],
    testEnvironment: 'jsdom',
    transform: {
      "\\.[jt]sx?$": "babel-jest"
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/config/fileMock.js',
      '\\.(css|less)$': 'identity-obj-proxy',
      'src/(.*)': '<rootDir>/src/$1'
    },
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  };
};
