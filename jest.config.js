const config = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = config;