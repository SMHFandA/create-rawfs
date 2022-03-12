export const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      exportLocalsConvention: 'camelCase',
      localIdentName: '[name]_[local]_[hash:base64:5]',
    },
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};

export const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      mode: 'global',
      exportLocalsConvention: 'camelCase',
    },
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};
