const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: -10,
        },
    },
};

module.exports = createJestConfig(config);
