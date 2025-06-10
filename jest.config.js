module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    // Handle CSS imports (important for .css files directly imported, less so for Tailwind)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports by mocking them
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // If you use path aliases in tsconfig.json, replicate them here
    // Example: '^@/components/(.*)$': '<rootDir>/components/$1',
    // For this project, relative paths are mostly used, so specific aliases might not be strictly needed for Jest to find modules
    // However, mocking assets like images imported from '../Assets/images/portfolio_dp.png' is crucial.
    // The rule above for images should catch this.
  },
  transform: {
    // Use babel-jest to transpile tests with Next.js Babel preset
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/coverage/',
    '/jest.config.js',
    '/postcss.config.js',
    '/tailwind.config.js',
    '/declarations.d.ts',
    '/next-env.d.ts',
    '/setupTests.ts',
    '/__mocks__/',
    '/types.ts', // Usually types files don't need coverage
    '/animation.ts', // Variants, could be excluded if desired
    '/data.ts', // Data, could be excluded
    '/pages/_app.tsx', // App structure, often harder to test meaningfully with unit tests
    '/pages/_document.tsx', // Document structure
  ],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
