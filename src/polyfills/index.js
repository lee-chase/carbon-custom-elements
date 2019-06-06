// NOTE: `Array.from()` and `Object.assign()` and event constructor are covered by `@webcomponents/webcomponents-platform`
import 'core-js/modules/es6.array.find.js';
import 'core-js/modules/es6.math.sign.js';
import 'core-js/modules/es6.symbol.js';
import 'core-js/modules/es7.array.includes.js';
import 'core-js/modules/es7.object.values.js';

import './element-closest.js';
import './element-matches.js';
import './toggle-class.js';

import 'es6-promise/auto'; // eslint-disable-line import/first

import '@webcomponents/webcomponents-platform';
import '@webcomponents/template/template.js';
import '@webcomponents/shadydom/src/shadydom.js';
import '@webcomponents/custom-elements/src/custom-elements.js';
import '@webcomponents/shadycss/entrypoints/scoping-shim.js';
import '@webcomponents/url/url.js';
