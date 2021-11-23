module.exports = {
  plugins: [
    "react",
    "react-native",
    "react-hooks",
    "jsx-a11y",
    "import",
    "flowtype",
    "prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "browser": true,
    "jest": true,
    "es6": true,
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:flowtype/recommended",
  ],
  rules: {
    "array-bracket-newline": [2, { multiline: true }],
    "array-bracket-spacing": [2, "never"],
    "array-element-newline": [2, "consistent"],
    "arrow-body-style": 0,
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "block-spacing": 2,
    "brace-style": 2,
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "comma-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "default-param-last": 0,
    "dot-location": [2, "property"],
    "eol-last": [2, "always"],
    "function-call-argument-newline": [2, "consistent"],
    "func-call-spacing": [2, "never"],
    "func-names": [2, "never"],
    "function-paren-newline": [2, "multiline-arguments"],
    "generator-star-spacing": [
      2,
      {
        before: true,
        after: false,
      },
    ],
    "implicit-arrow-linebreak": 0,
    "import/no-unresolved": [
      2,
      {
        commonjs: true,
        amd: true,
      },
    ],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "indent": [
      2,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        MemberExpression: 1,
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: false,
      },
    ],
    "jsx-quotes": [2, "prefer-double"],
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "keyword-spacing": 2,
    "linebreak-style": [2, "unix"],
    "lines-between-class-members": [
      2,
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "max-len": [2, { code: 80 }],
    "max-statements-per-line": [2, { max: 1 }],
    "multiline-comment-style": [2, "separate-lines"],
    "multiline-ternary": [2, "always-multiline"],
    "new-parens": 2,
    "newline-per-chained-call": [2, { ignoreChainWithDepth: 2 }],
    "no-bitwise": 0,
    "no-extra-parens": 2,
    "no-multi-spaces": 2,
    "no-multiple-empty-lines": [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "no-shadow": 0,
    "no-tabs": [2, { allowIndentationTabs: true }],
    "no-trailing-spaces": [2, { ignoreComments: false }],
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "no-whitespace-before-property": 2,
    "object-curly-newline": [
      2,
      {
        multiline: true,
        consistent: true,
        minProperties: 3,
      },
    ],
    "object-curly-spacing": [2, "always"],
    "object-property-newline": [
      2,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "operator-linebreak": [
      2,
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],
    "padded-blocks": [2, "never"],
    "padding-line-between-statements": [
      2,
      {
        blankLine: "always",
        prev: [
          "const",
          "let",
          "var",
        ],
        next: "*",
      },
      {
        blankLine: "any",
        prev: [
          "const",
          "let",
          "var",
        ],
        next: [
          "const",
          "let",
          "var",
        ],
      },
    ],
    "quotes": [
      2,
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    "quote-props": [2, "consistent-as-needed"],
    "react/display-name": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "react/jsx-curly-spacing": [
      2,
      {
        when: "never",
        allowMultiline: false,
      },
    ],
    "react/jsx-filename-extension": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-fragments": 0,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-props-per-line": [
      2,
      {
        maximum: {
          single: 4,
          multi: 1,
        },
      },
    ],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": 0,
    "react/jsx-tag-spacing": [
      2,
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      },
    ],
    "react/jsx-wrap-multilines": [
      2,
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
    "react/no-unescaped-entities": 0,
    "react/require-default-props": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": "warn",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react/prop-types": 2,
    "rest-spread-spacing": 2,
    "semi": [2, "always"],
    "semi-spacing": 2,
    "semi-style": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [2, { words: true, nonwords: false }],
    "switch-colon-spacing": 2,
    "template-curly-spacing": 2,
    "template-tag-spacing": 2,
    "unicode-bom": [2, "never"],
    "wrap-iife": [2, "inside"],
    "wrap-regex": 2,
    "yield-star-spacing": [2, "before"],
  },
  globals: {
    fetch: false,
  },
};
