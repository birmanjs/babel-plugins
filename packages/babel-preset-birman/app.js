module.exports = function (context, opts) {
  const { nodeEnv } = opts;
  delete opts['nodeEnv'];

  return {
    presets: [
      [
        require('./lib').default,
        require('@birman/utils').deepmerge(
          {
            typescript: true,
            env: {
              useBuiltIns: 'entry',
              corejs: 3,
              modules: false
            },
            react: {
              development: nodeEnv === 'development'
            },
            transformRuntime: {},
            reactRemovePropTypes: nodeEnv === 'production',
            reactRequire: true
          },
          opts
        )
      ]
    ]
  };
};
