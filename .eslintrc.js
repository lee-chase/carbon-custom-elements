/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
  },
  extends: ['carbon-base'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-restricted-globals': ['error', 'isFinite'].concat(restrictedGlobals),
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
      },
    },
    {
      files: ['**/*-react.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react'],
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'import/no-unresolved': [2, { ignore: ['^carbon-custom-elements/es/components-react/'] }],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
      },
    },
  ],
};
