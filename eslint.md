{
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false,
    "ecmaFeatures": {
      "jsx": true
       },
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "plugins": [
        "prettier",
        "react",
        "react-hooks"
    ],
    "env": {
        "browser": true,
        "jest": true
    },
    "rules": {
"react/prop-types": 0,
"no-debugger": 0,
"no-alert": 0,
"no-string-literal": 0,
"no-string-throw": 1,
"no-switch-case-fall-through": 1,
"no-unnecessary-initializer": 1,
"no-unused-expression": 1,
"no-use-before-declare": 1,
"no-var-keyword": 1,
"object-literal-sort-keys": 1,
"unified-signatures": 1,
"variable-name": 1,
"whitespace": [
    1,
    "check-branch",
    "check-decl",
    "check-operator",
    "check-separator",
    "check-type"
],
"directive-selector": [
    1,
    "attribute",
    "app",
    "camelCase"
],
"component-selector": [
    1,
    "element",
    "app",
    "kebab-case"
],
"no-output-on-prefix": 1,
"use-input-property-decorator": 1,
"use-output-property-decorator": 1,
"use-host-property-decorator": 1,
"no-input-rename": 1,
"no-output-rename": 1,
"no-await-in-loop": 0,
"no-return-assign": [
    1,
    "except-parens"
],
"no-restricted-syntax": [
    2,
    "ForInStatement",
    "LabeledStatement",
    "WithStatement"
],
"no-unused-vars": [
    1,
    {
        "ignoreSiblings": 1,
        "argsIgnorePattern": "res|next|^err"
    }
],
"prefer-const": [
    1,
    {
        "destructuring": "all"
    }
],
"arrow-body-style": [
    2,
    "as-needed"
],
"no-unused-expressions": [
    2,
    {
        "allowTaggedTemplates": 1
    }
],
"no-param-reassign": [
    2,
    {
        "props": false
    }
],
"no-console": 1,
"no-shadowed-variable": 2,
"import/prefer-default-export": 0,
"import": 0,
"func-names": 0,
"space-before-function-paren": 0,
"comma-dangle": 1,
"max-len": 0,
"import/extensions": 0,
"no-underscore-dangle": 0,
"consistent-return": 0,
"react/display-name": 1,
"react/no-array-index-key": 0,
"react/react-in-jsx-scope": 0,
"react/prefer-stateless-function": 0,
"react/forbid-prop-types": 0,
"react/no-unescaped-entities": 0,
"jsx-a11y/accessible-emoji": 0,
  "multiline": "consistent" ,
"react/require-default-props": 0,
"react/jsx-filename-extension": [
    1,
    {
        "extensions": [
            ".js",
            ".jsx"
        ]
    }
],
"radix": 0,
"no-shadow": [
    2,
    {
        "hoist": "all",
        "allow": [
            "resolve",
            "reject",
            "done",
            "next",
            "err",
            "error"
        ]
    }
],
"quotes": [
    2,
    "single",
    {
        "avoidEscape": 1,
        "allowTemplateLiterals": 1
    }
],
"prettier/prettier": [
    "error",
    {
        "trailingComma": "es5",
        "singleQuote": 1,
        "printWidth": 80
    }
],
"jsx-a11y/href-no-hash": "off",
"jsx-a11y/anchor-is-valid": [
    "warn",
    {
        "aspects": [
            "invalidHref"
        ]
    }
],
"react-hooks/rules-of-hooks": "error",
"react-hooks/exhaustive-deps": "warn",
"import/newline-after-import": "error"
    },

}