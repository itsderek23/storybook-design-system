// TODO - why was this change made? Will it build fine w/o this change for UXPin?

// module.exports = api => {
//   api.cache(true);
//
//   return {
//     presets: ['@babel/env', '@babel/react'],
//     plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
//     env: {
//       test: {
//         plugins: ['require-context-hook'],
//       },
//     },
//   };
// };

module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: ['@babel/plugin-proposal-object-rest-spread'],
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};
