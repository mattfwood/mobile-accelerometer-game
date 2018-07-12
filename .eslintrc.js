module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    // add DOM / browser globals
    window: true,
    document: true,
    navigator: true,
    fetch: true,
    URL: true,
    // add testing globals for Jest
    it: true,
    describe: true,
    expect: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/no-autofocus': 1,
    'function-paren-newline': ['error', 'multiline'],
    'no-console': 0,
    'arrow-body-style': 0,
    'react/no-array-index-key': 1,
    'react/prefer-stateless-function': 1,
    'react/no-did-update-set-state': 1,
    'no-debugger': 0,
    'linebreak-style': 0
  },
};
