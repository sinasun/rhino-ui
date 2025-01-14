module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines", "stylelint-config-css-modules"],
  rules: {
    "declaration-property-value-disallowed-list": null,
    "max-nesting-depth": null,
    "selector-max-compound-selectors": 4,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "media-query-no-invalid": null,
    "keyframes-name-pattern": null,
    "import-notation": null,
  },
};
