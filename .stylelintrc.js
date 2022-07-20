module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'no-empty-source': null,
    'max-nesting-depth': null,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9_]+$',
    'selector-max-compound-selectors': null,
    'declaration-property-value-disallowed-list': null,
    'selector-pseudo-element-no-unknown': null,
    'property-no-vendor-prefix': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-no-qualifying-type': null,
    'order/properties-alphabetical-order': null,
  },
};
