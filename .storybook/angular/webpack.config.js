/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const configure = require('../webpack.config');

module.exports = ({ config, mode }) => {
  const massagedConfig = configure({ config, mode });
  const babelLoaderRuleIndex = massagedConfig.module.rules.findIndex(
    item =>
      '/\\.ts$/' === (item.test && item.test.toString()) &&
      item.use &&
      item.use.some &&
      item.use.some(use => /babel-loader/i.test(use) || /babel-loader/i.test(use.loader))
  );
  if (babelLoaderRuleIndex >= 0) {
    const babelLoaderRule = massagedConfig.module.rules[babelLoaderRuleIndex];
    massagedConfig.module.rules.splice(
      babelLoaderRuleIndex,
      1,
      {
        test: /\.tsx?$/,
        use: [...babelLoaderRule.use, 'ts-loader'],
      },
      {
        test: /@carbon[\\/]icons-angular/i,
        use: babelLoaderRule.use,
      }
    );
  }
  return massagedConfig;
};
