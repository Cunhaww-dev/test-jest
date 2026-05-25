import type { Config } from 'jest';

const config: Config = {
  bail: true, // para a execução se um teste falhar
  preset: 'ts-jest', // para usar o ts-jest como preset
  testEnvironment: 'node', // ambiente de teste para Node.js
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default config;
