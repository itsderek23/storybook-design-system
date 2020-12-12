/*
 * Exports an async getStorybookConfig function that returns the storybook
 * webpack config.
 *
 * Much of the logic below is extracted from
 * @storybook/core/dist/server/build-static.js.
 */

/*
 * Low-level JS Functions from build-js used to create the config.
 */

// From build-js.
// https://stackoverflow.com/questions/51159447/what-is-interoprequiredefault#52008959
// To allow your code to consume modules written for nodejs as well as for ES6.
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copy and pasted from build-static.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

// Copy and pasted from build-static.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copy and pasted from build-static.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * END - Low-level JS Functions from build-js used to create the config.
 */

// Loading the React framework-specific options (this sets the package.json contents) and
// React-specific presets. This could be made more general, but we only support React anyway.
var _options = _interopRequireDefault(require("./node_modules/@storybook/react/dist/server/options.js"));

// _config.default returns an async function that loads a first round of webpack config settings (including babel).
var _config = _interopRequireDefault(require("./node_modules/@storybook/core/dist/server/config.js"));

// Values below are required to generate the webpack config.
const configType = 'PRODUCTION';
// Not actually building, but it is required.
const outputDir = './storybook-static'
// Should probably set configDir dynamically - look at build-static.js.
_options["configDir"] = './.storybook'

const {
  staticDir,
  configDir,
  packageJson
} = _options;

/*
 * Returns a Promise with the fully-built Storybook webpack config.
 */
async function getStorybookConfig() {
  console.log("inside getStorybookConfig")
  let storybookConfig = await (0, _config.default)(
    _objectSpread({
      configType,
      outputDir,
      packageJson,
      // preview-preset.js returns a Promise
      corePresets: [require.resolve('/Users/dlite/projects/play/storybook-design-system/node_modules/@storybook/core/dist/server/preview/preview-preset.js')],
      // custom-webpack-preset.js returns a Promise
      overridePresets: [require.resolve('/Users/dlite/projects/play/storybook-design-system/node_modules/@storybook/core/dist/server/preview/custom-webpack-preset.js')]
    },
    _options));
  console.log("after await in getStorybookConfig. storybookConfig=",storybookConfig)
  return storybookConfig
}

// Export the function to return the webpack config.
exports.getStorybookConfig = getStorybookConfig
console.log("exports.getStorybookConfig", exports.getStorybookConfig)

getStorybookConfig().then( (v) => {
  console.log("previewConfig=",v)
})
