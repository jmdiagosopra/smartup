module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'node': true,
    'es6': true,
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
    'parser': 'babel-eslint',
    'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 6,
    'allowImportExportEverywhere': true,
    'ecmaFeatures': { 
      'experimentalObjectRestSpread': true 
    }
  },
  'rules': {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'max-len': 'off',
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',
    'object-curly-spacing': [1, 'always'],
    'lines-between-class-members': ['error', 'always'],
    'require-jsdoc': [
      'error',
      {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': true,
          'ClassDeclaration': false,
          'ArrowFunctionExpression': false,
          'FunctionExpression': false
        }
      }
    ],
    'quote-props': [
      'error',
      'as-needed'
    ]
  },
  'plugins':[
    'html'
  ],
  'settings': {
    'html/report-bad-indent': 'error',
  } 
};
