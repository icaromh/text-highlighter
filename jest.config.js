// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  setupTestFrameworkScriptFile: '<rootDir>src/setupTests.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  // resolveSnapshotPath: (testPath, snapshotExtension) => testPath.replace('__tests__', '__snapshots__') + snapshotExtension,

  // // resolves from snapshot to test path
  // resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath
  //     .replace('__snapshots__', '__tests__')
  //     .slice(0, -snapshotExtension.length),

  // // Example test path, used for preflight concistency check of the implementation above
  // testPathForConsistencyCheck: 'some/__tests__/example.test.js',
}
